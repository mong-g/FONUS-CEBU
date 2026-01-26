import { Inquiry } from '../types';

// In-memory storage (This will be replaced by a real Database later)
// Note: This resets when the server restarts. To make it persistent without a DB, we'd need to write to a JSON file.
const inquiries: Inquiry[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Plan Inquiry',
    message: 'I am interested in the Red Rose Plan. Can you send more details?',
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    status: 'NEW'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Service Question',
    message: 'Do you offer transport services outside Cebu City?',
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    status: 'READ'
  }
];

export const inquiryService = {
  getAll: async (): Promise<Inquiry[]> => {
    // Simulate DB delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [...inquiries].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  create: async (data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Promise<Inquiry> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const newInquiry: Inquiry = {
      ...data,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
      status: 'NEW'
    };
    
    inquiries.push(newInquiry);
    return newInquiry;
  },

  markAsRead: async (id: string): Promise<boolean> => {
    const index = inquiries.findIndex(i => i.id === id);
    if (index !== -1) {
      inquiries[index].status = 'READ';
      return true;
    }
    return false;
  }
};
