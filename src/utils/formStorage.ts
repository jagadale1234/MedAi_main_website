// Utility functions for managing form submissions

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  practice: string;
  phone: string;
  submittedAt: string;
}

// Get all demo requests from localStorage
export const getDemoRequests = (): DemoRequest[] => {
  try {
    const data = localStorage.getItem('demoRequests');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading demo requests:', error);
    return [];
  }
};

// Export demo requests as JSON file
export const exportDemoRequestsAsJSON = () => {
  const requests = getDemoRequests();
  const dataStr = JSON.stringify(requests, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = `demo-requests-${new Date().toISOString().split('T')[0]}.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

// Export demo requests as CSV file
export const exportDemoRequestsAsCSV = () => {
  const requests = getDemoRequests();
  
  if (requests.length === 0) {
    alert('No demo requests to export');
    return;
  }

  // CSV headers
  const headers = ['ID', 'Name', 'Email', 'Phone', 'Practice', 'Preferred Date', 'Preferred Time', 'Submitted At'];
  
  // Convert data to CSV format
  const csvContent = [
    headers.join(','),
    ...requests.map(request => [
      request.id,
      `"${request.name}"`,
      request.email,
      request.phone,
      `"${request.practice}"`,
      request.date,
      request.time,
      request.submittedAt
    ].join(','))
  ].join('\n');

  // Download CSV
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `demo-requests-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Clear all demo requests (use with caution)
export const clearDemoRequests = () => {
  if (confirm('Are you sure you want to clear all demo requests? This action cannot be undone.')) {
    localStorage.removeItem('demoRequests');
    console.log('All demo requests cleared');
  }
};

// Log all demo requests to console (for debugging)
export const logDemoRequests = () => {
  const requests = getDemoRequests();
  console.log('All Demo Requests:', requests);
  console.log(`Total: ${requests.length} submissions`);
  return requests;
};
