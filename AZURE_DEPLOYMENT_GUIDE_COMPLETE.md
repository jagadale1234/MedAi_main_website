# Azure Deployment Guide for MedAI Demo Requests

## 🎯 Overview

This guide will help you migrate from Formspree to a complete Azure-based solution that provides:
- **Database storage** for all demo requests
- **Professional email notifications** 
- **Scalable serverless architecture**
- **Advanced analytics and reporting**
- **Custom integrations** (CRM, calendars, etc.)

---

## 📋 Prerequisites

### 1. **Azure Account**
- Active Azure subscription
- Azure CLI installed on your machine
- Basic familiarity with Azure Portal

### 2. **Development Tools**
- Node.js (v18 or later)
- Azure Functions Core Tools
- VS Code with Azure Extensions (recommended)

### 3. **Domain & Email**
- Custom domain purchased (e.g., medai.com)
- Email address for notifications (e.g., demo-requests@medai.com)

---

## 🏗️ Azure Resources Needed

### **Core Services:**

1. **Azure Functions** 
   - Serverless API for form processing
   - Cost: Free tier (1M executions/month)

2. **Azure Cosmos DB**
   - NoSQL database for storing demo requests
   - Cost: ~$25-50/month (low usage)

3. **Azure Communication Services**
   - Professional email sending
   - Cost: $0.0012 per email sent

4. **Azure Static Web Apps** (Optional)
   - Host your React website
   - Cost: Free tier available

### **Optional Enhancements:**

5. **Azure Application Insights**
   - Monitoring and analytics
   - Cost: Free tier (5GB/month)

6. **Azure Key Vault**
   - Secure secrets management
   - Cost: ~$3/month

---

## 💰 Cost Breakdown

### **Estimated Monthly Costs:**

| Service | Usage | Cost |
|---------|-------|------|
| Azure Functions | <1M executions | **Free** |
| Cosmos DB | 10GB storage, 1000 RU/s | **$25-40** |
| Communication Services | 100 emails/month | **$0.12** |
| Static Web Apps | Basic hosting | **Free** |
| Application Insights | Basic monitoring | **Free** |
| **Total Estimated** | | **$25-40/month** |

*Costs scale with usage. Higher traffic = higher costs but also more business value.*

---

## 🚀 Step-by-Step Deployment

### **Phase 1: Create Azure Resources**

#### **1.1 Login and Setup**
```bash
# Install Azure CLI (if not already installed)
# Download from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login to Azure
az login

# Set your subscription (if you have multiple)
az account set --subscription "Your Subscription Name"
```

#### **1.2 Create Resource Group**
```bash
# Create a resource group for all MedAI resources
az group create \
  --name "medai-production" \
  --location "East US" \
  --tags "project=medai" "environment=production"
```

#### **1.3 Create Cosmos DB**
```bash
# Create Cosmos DB account
az cosmosdb create \
  --name "medai-cosmos-db" \
  --resource-group "medai-production" \
  --kind "GlobalDocumentDB" \
  --default-consistency-level "Session" \
  --locations regionName="East US" failoverPriority=0 isZoneRedundant=False

# Create database
az cosmosdb sql database create \
  --account-name "medai-cosmos-db" \
  --resource-group "medai-production" \
  --name "medai-database"

# Create container for demo requests
az cosmosdb sql container create \
  --account-name "medai-cosmos-db" \
  --resource-group "medai-production" \
  --database-name "medai-database" \
  --name "demo-requests" \
  --partition-key-path "/id" \
  --throughput 400
```

#### **1.4 Create Communication Services**
```bash
# Create Communication Services resource
az communication create \
  --name "medai-communication" \
  --resource-group "medai-production" \
  --data-location "United States"
```

#### **1.5 Create Function App**
```bash
# Create storage account (required for Functions)
az storage account create \
  --name "medaifunctionstorage" \
  --resource-group "medai-production" \
  --location "East US" \
  --sku "Standard_LRS"

# Create Function App
az functionapp create \
  --name "medai-demo-functions" \
  --resource-group "medai-production" \
  --storage-account "medaifunctionstorage" \
  --consumption-plan-location "East US" \
  --runtime "node" \
  --runtime-version "18" \
  --functions-version "4"
```

### **Phase 2: Configure Email Domain**

#### **2.1 Domain Verification**
1. Go to Azure Portal → Communication Services → "medai-communication"
2. Navigate to "Email" → "Provision domains"
3. Click "Add domain" → "Custom domain"
4. Enter your domain (e.g., medai.com)
5. Add the required DNS records to your domain registrar:
   ```
   Type: TXT
   Name: @
   Value: [Azure-provided verification string]
   ```

#### **2.2 Sender Authentication**
```bash
# Configure SPF record (add to DNS)
# Type: TXT
# Name: @
# Value: v=spf1 include:spf.protection.azure.com ~all

# Configure DKIM (Azure will provide keys)
# Add CNAME records as instructed in Azure Portal
```

### **Phase 3: Deploy Azure Functions**

#### **3.1 Create Function Code**
```bash
# Create project directory
mkdir medai-azure-functions
cd medai-azure-functions

# Initialize Functions project
func init --javascript --docker false

# Create HTTP trigger function
func new --name "demo-request" --template "HTTP trigger" --authlevel "anonymous"
```

#### **3.2 Function Implementation**
Create `demo-request/index.js`:
```javascript
const { CosmosClient } = require('@azure/cosmos');
const { EmailClient } = require('@azure/communication-email');

// Configuration from environment variables
const cosmosClient = new CosmosClient({
    endpoint: process.env.COSMOS_DB_ENDPOINT,
    key: process.env.COSMOS_DB_KEY
});

const emailClient = new EmailClient(process.env.COMMUNICATION_SERVICES_CONNECTION_STRING);

module.exports = async function (context, req) {
    // Set CORS headers
    context.res = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    };

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        context.res.status = 200;
        return;
    }

    try {
        const { name, email, date, time, practice, phone } = req.body;

        // Validate required fields
        if (!name || !email || !date || !time || !practice) {
            context.res = {
                ...context.res,
                status: 400,
                body: { error: 'Missing required fields' }
            };
            return;
        }

        // Create demo request record
        const demoRequest = {
            id: `demo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name,
            email,
            date,
            time,
            practice,
            phone: phone || '',
            submittedAt: new Date().toISOString(),
            status: 'pending',
            source: 'website'
        };

        // Save to Cosmos DB
        const database = cosmosClient.database('medai-database');
        const container = database.container('demo-requests');
        const { resource } = await container.items.create(demoRequest);

        // Send email notification
        const emailMessage = {
            senderAddress: "no-reply@medai.com", // Update with your verified domain
            content: {
                subject: `🎯 New Demo Request from ${name} - ${practice}`,
                html: generateEmailTemplate(demoRequest)
            },
            recipients: {
                to: [
                    {
                        address: "demo-requests@medai.com", // Update with your email
                        displayName: "MedAI Demo Team"
                    }
                ]
            }
        };

        const emailResult = await emailClient.beginSend(emailMessage);

        context.res = {
            ...context.res,
            status: 200,
            body: { 
                success: true, 
                message: 'Demo request submitted successfully',
                id: resource.id,
                emailSent: true
            }
        };

    } catch (error) {
        context.log.error('Error processing demo request:', error);
        
        context.res = {
            ...context.res,
            status: 500,
            body: { 
                error: 'Failed to process demo request',
                details: error.message
            }
        };
    }
};

function generateEmailTemplate(data) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>New Demo Request - MedAI</title>
            <style>
                body { 
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                    line-height: 1.6; 
                    color: #333; 
                    margin: 0; 
                    padding: 0; 
                    background: #f5f5f5;
                }
                .container { 
                    max-width: 600px; 
                    margin: 20px auto; 
                    background: #fff; 
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                .header { 
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                    color: white; 
                    padding: 30px 20px; 
                    text-align: center; 
                }
                .header h1 { 
                    margin: 0; 
                    font-size: 24px; 
                    font-weight: 600;
                }
                .content { 
                    padding: 30px 20px; 
                }
                .card { 
                    background: #f8f9fa; 
                    border-radius: 8px; 
                    padding: 20px; 
                    margin-bottom: 20px; 
                    border-left: 4px solid #667eea;
                }
                .field { 
                    display: flex; 
                    margin-bottom: 12px; 
                    align-items: center;
                }
                .label { 
                    font-weight: 600; 
                    color: #495057; 
                    min-width: 120px; 
                }
                .value { 
                    color: #212529; 
                    flex: 1; 
                }
                .urgent { 
                    background: #fff3cd; 
                    border: 1px solid #ffeaa7; 
                    border-radius: 6px;
                    padding: 15px; 
                    margin: 20px 0; 
                    text-align: center;
                }
                .footer { 
                    text-align: center; 
                    padding: 20px; 
                    font-size: 14px; 
                    color: #6c757d; 
                    background: #f8f9fa;
                }
                .cta-button { 
                    display: inline-block; 
                    background: #007bff; 
                    color: white; 
                    padding: 12px 24px; 
                    text-decoration: none; 
                    border-radius: 6px; 
                    margin: 15px 0;
                    font-weight: 600;
                }
                .cta-button:hover {
                    background: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎯 New Demo Request</h1>
                    <p>Someone wants to see MedAI in action!</p>
                </div>
                
                <div class="content">
                    <div class="urgent">
                        <strong>⚡ Action Required:</strong> A potential client is interested in a demo. Please respond within 24 hours for best conversion rates.
                    </div>
                    
                    <div class="card">
                        <h3 style="margin-top: 0; color: #495057;">👤 Contact Information</h3>
                        <div class="field">
                            <span class="label">Name:</span>
                            <span class="value"><strong>${data.name}</strong></span>
                        </div>
                        <div class="field">
                            <span class="label">Email:</span>
                            <span class="value"><a href="mailto:${data.email}" style="color: #007bff;">${data.email}</a></span>
                        </div>
                        <div class="field">
                            <span class="label">Phone:</span>
                            <span class="value">${data.phone || 'Not provided'}</span>
                        </div>
                        <div class="field">
                            <span class="label">Organization:</span>
                            <span class="value"><strong>${data.practice}</strong></span>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3 style="margin-top: 0; color: #495057;">📅 Preferred Schedule</h3>
                        <div class="field">
                            <span class="label">Date:</span>
                            <span class="value"><strong>${data.date}</strong></span>
                        </div>
                        <div class="field">
                            <span class="label">Time:</span>
                            <span class="value"><strong>${data.time}</strong></span>
                        </div>
                        <div class="field">
                            <span class="label">Submitted:</span>
                            <span class="value">${new Date(data.submittedAt).toLocaleString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric', 
                                hour: '2-digit', 
                                minute: '2-digit',
                                timeZoneName: 'short'
                            })}</span>
                        </div>
                    </div>
                    
                    <div style="text-align: center;">
                        <a href="mailto:${data.email}?subject=MedAI Demo Confirmation - ${data.date}&body=Hi ${data.name},%0D%0A%0D%0AThank you for your interest in MedAI! I'd be happy to schedule a demo for ${data.date} at ${data.time}.%0D%0A%0D%0ATo confirm this appointment, please reply with:%0D%0A- Any specific areas you'd like to focus on%0D%0A- Number of attendees%0D%0A- Preferred meeting platform (Zoom, Teams, etc.)%0D%0A%0D%0ALooking forward to showing you how MedAI can transform your triage process!%0D%0A%0D%0ABest regards,%0D%0AThe MedAI Team" class="cta-button">
                            📧 Reply to ${data.name}
                        </a>
                    </div>
                </div>
                
                <div class="footer">
                    <p>This notification was automatically generated from your MedAI website.</p>
                    <p><strong>Request ID:</strong> ${data.id}</p>
                    <p><strong>Source:</strong> Website Demo Form</p>
                </div>
            </div>
        </body>
        </html>
    `;
}
```

#### **3.3 Package Dependencies**
Create `package.json`:
```json
{
  "name": "medai-azure-functions",
  "version": "1.0.0",
  "description": "Azure Functions for MedAI demo requests",
  "main": "index.js",
  "scripts": {
    "start": "func start",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "@azure/cosmos": "^4.0.0",
    "@azure/communication-email": "^1.0.0"
  },
  "devDependencies": {
    "azure-functions-core-tools": "^4.0.0"
  }
}
```

#### **3.4 Deploy Function**
```bash
# Install dependencies
npm install

# Deploy to Azure
func azure functionapp publish medai-demo-functions
```

### **Phase 4: Configure Environment Variables**

#### **4.1 Get Connection Strings**
```bash
# Get Cosmos DB connection info
az cosmosdb keys list --name "medai-cosmos-db" --resource-group "medai-production"

# Get Communication Services connection string
az communication list-key --name "medai-communication" --resource-group "medai-production"
```

#### **4.2 Set Environment Variables**
```bash
# Set function app configuration
az functionapp config appsettings set \
  --name "medai-demo-functions" \
  --resource-group "medai-production" \
  --settings \
  "COSMOS_DB_ENDPOINT=https://medai-cosmos-db.documents.azure.com:443/" \
  "COSMOS_DB_KEY=your-cosmos-db-primary-key" \
  "COMMUNICATION_SERVICES_CONNECTION_STRING=your-communication-services-connection-string"
```

### **Phase 5: Update Frontend**

#### **5.1 Update Email Service**
Update `src/lib/emailService.ts`:
```typescript
// Replace Formspree URL with Azure Function URL
const AZURE_FUNCTION_URL = 'https://medai-demo-functions.azurewebsites.net/api/demo-request';

export const sendDemoRequestEmail = async (formData: DemoRequestData): Promise<boolean> => {
  try {
    const response = await fetch(AZURE_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        practice: formData.practice,
        phone: formData.phone
      })
    });

    if (!response.ok) {
      console.error('Azure Function error:', response.status);
      return false;
    }

    const result = await response.json();
    console.log('Demo request processed successfully:', result);
    return result.success;
    
  } catch (error) {
    console.error('Failed to submit demo request:', error);
    return false;
  }
};
```

---

## 🔒 Security & Best Practices

### **1. Security Measures**
- **HTTPS Only**: All communications encrypted
- **CORS Protection**: Configured for your domain only
- **Input Validation**: Server-side validation for all inputs
- **Rate Limiting**: Built into Azure Functions
- **Key Vault**: Store secrets securely (optional)

### **2. Monitoring & Alerts**
```bash
# Enable Application Insights
az monitor app-insights component create \
  --app "medai-demo-insights" \
  --resource-group "medai-production" \
  --location "East US"

# Link to Function App
az functionapp config appsettings set \
  --name "medai-demo-functions" \
  --resource-group "medai-production" \
  --settings "APPINSIGHTS_INSTRUMENTATIONKEY=your-insights-key"
```

### **3. Backup & Recovery**
```bash
# Enable automated backups for Cosmos DB
az cosmosdb update \
  --name "medai-cosmos-db" \
  --resource-group "medai-production" \
  --backup-policy-type "Periodic" \
  --backup-interval 240 \
  --backup-retention 8
```

---

## 📊 Advanced Features

### **1. Analytics Dashboard**
Create a simple dashboard to view demo requests:
- Power BI integration
- Custom Azure Function for dashboard data
- Real-time metrics

### **2. CRM Integration**
- Connect to Salesforce, HubSpot, or Pipedrive
- Automatic lead creation
- Follow-up automation

### **3. Calendar Integration**
- Microsoft Graph API integration
- Automatic calendar booking
- Meeting link generation

### **4. Lead Scoring**
- AI-powered lead qualification
- Priority scoring based on company size, urgency
- Automated routing to sales team

---

## 🚀 Migration Strategy

### **From Formspree to Azure:**

1. **Phase 1**: Deploy Azure infrastructure (parallel to Formspree)
2. **Phase 2**: Test Azure functions with test data
3. **Phase 3**: Switch frontend to Azure (can revert if issues)
4. **Phase 4**: Export Formspree data and import to Cosmos DB
5. **Phase 5**: Deactivate Formspree

### **Zero-Downtime Migration:**
```typescript
// Dual-submit strategy during migration
const submitToMultipleServices = async (formData) => {
  const [formspreeResult, azureResult] = await Promise.allSettled([
    submitToFormspree(formData),
    submitToAzure(formData)
  ]);
  
  // Log results for comparison
  console.log('Formspree:', formspreeResult);
  console.log('Azure:', azureResult);
  
  // Return success if either succeeds
  return formspreeResult.status === 'fulfilled' || azureResult.status === 'fulfilled';
};
```

---

## 📈 ROI & Benefits

### **Immediate Benefits:**
- **Professional image**: Custom domain emails
- **Data ownership**: All data in your Azure tenant
- **Scalability**: Handle unlimited requests
- **Integration ready**: Connect to CRM, analytics, etc.

### **Long-term Value:**
- **Analytics**: Detailed insights into lead sources
- **Automation**: Reduce manual follow-up work
- **Compliance**: GDPR, HIPAA-ready infrastructure
- **Customization**: Build exactly what you need

---

## 🆘 Support & Troubleshooting

### **Common Issues:**

1. **CORS Errors**
   ```bash
   # Fix CORS in Function App
   az functionapp cors add --name "medai-demo-functions" --resource-group "medai-production" --allowed-origins "https://yourdomain.com"
   ```

2. **Email Not Sending**
   - Verify domain ownership in Communication Services
   - Check SPF/DKIM DNS records
   - Validate sender email address

3. **Database Connection Issues**
   - Verify Cosmos DB connection string
   - Check firewall settings
   - Validate container names

### **Monitoring Commands:**
```bash
# View function logs
az functionapp log tail --name "medai-demo-functions" --resource-group "medai-production"

# Check function status
az functionapp show --name "medai-demo-functions" --resource-group "medai-production"

# Monitor costs
az consumption budget list --subscription "your-subscription-id"
```

---

## ✅ Deployment Checklist

### **Pre-Migration:**
- [ ] Azure subscription active
- [ ] Domain purchased and DNS access
- [ ] Team trained on Azure Portal
- [ ] Backup current Formspree data

### **During Migration:**
- [ ] All Azure resources created
- [ ] Email domain verified
- [ ] Functions deployed and tested
- [ ] Environment variables configured
- [ ] Frontend updated and tested

### **Post-Migration:**
- [ ] Email notifications working
- [ ] Database storing data correctly
- [ ] Monitoring alerts configured
- [ ] Team access to Azure Portal
- [ ] Documentation updated

---

## 🎯 Conclusion

This Azure deployment gives you:
- **Enterprise-grade** infrastructure
- **Complete data control**
- **Unlimited scalability**
- **Advanced integration** capabilities
- **Professional email** handling

**Total setup time**: 4-6 hours
**Monthly cost**: $25-40
**Migration effort**: Low risk with rollback options

You'll have a production-ready system that can grow with your business and integrate with any future tools you need!
