import { Inquiry } from '../types';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'inquiries.json');

const initialInquiries: Inquiry[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Plan Inquiry',
    message: 'I am interested in the Red Rose Plan. Can you send more details?',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    status: 'NEW'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Service Question',
    message: 'Do you offer transport services outside Cebu City?',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    status: 'READ'
  }
];

// Helper to read data
async function getInquiries(): Promise<Inquiry[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or error, return initial data and create file
    await fs.writeFile(DATA_FILE, JSON.stringify(initialInquiries, null, 2));
    return initialInquiries;
  }
}

// Helper to save data
async function saveInquiries(inquiries: Inquiry[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(inquiries, null, 2));
}

export const inquiryService = {
  getAll: async (): Promise<Inquiry[]> => {
    const inquiries = await getInquiries();
    return inquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  create: async (data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Promise<Inquiry> => {
    const inquiries = await getInquiries();
    const newInquiry: Inquiry = {
      ...data,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
      status: 'NEW'
    };
    
    inquiries.push(newInquiry);
    await saveInquiries(inquiries);
    return newInquiry;
  },

  markAsRead: async (id: string): Promise<boolean> => {
    const inquiries = await getInquiries();
    const index = inquiries.findIndex(i => i.id === id);
    if (index !== -1) {
      inquiries[index].status = 'READ';
      await saveInquiries(inquiries);
      return true;
    }
    return false;
  },

  archive: async (id: string): Promise<boolean> => {
    const inquiries = await getInquiries();
    const index = inquiries.findIndex(i => i.id === id);
    if (index !== -1) {
      inquiries[index].status = 'ARCHIVED';
      await saveInquiries(inquiries);
      return true;
    }
    return false;
  }
};