// Email service using Formspree for demo request notifications
// Simple, secure, and reliable form handling with email notifications

interface DemoRequestData {
  name: string;
  email: string;
  date: string;
  time: string;
  practice: string;
  phone: string;
  submittedAt: string;
}

// Formspree endpoint URL
const FORMSPREE_URL = 'https://formspree.io/f/mnnzojay';

export const sendDemoRequestEmail = async (formData: DemoRequestData): Promise<boolean> => {
  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        practice: formData.practice,
        preferredDate: formData.date,
        preferredTime: formData.time,
        submittedAt: new Date(formData.submittedAt).toLocaleString(),
        message: `New demo request from ${formData.name} at ${formData.practice}. They would like to schedule a demo on ${formData.date} at ${formData.time}.`,
        _subject: `New Demo Request from ${formData.name} - ${formData.practice}`,
        _replyto: formData.email,
        _template: 'box'
      })
    });

    if (!response.ok) {
      console.error('Formspree error:', response.status, response.statusText);
      return false;
    }

    const result = await response.json();
    console.log('Demo request submitted successfully via Formspree:', result);
    return true;
    
  } catch (error) {
    console.error('Failed to submit demo request:', error);
    return false;
  }
};
