import { User } from '../types';

// Mock Admin User for now (Until Database is ready)
const ADMIN_USER: User = {
  id: 'admin-001',
  email: 'admin@fonus.com',
  name: 'Fonus Admin',
  role: 'ADMIN',
};

export const authService = {
  login: async (email: string, password: string): Promise<{ success: boolean; user?: User; token?: string }> => {
    // Simulate DB delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simple hardcoded check for the "Sample Account" you requested
    if (email === 'admin@fonus.com' && password === 'admin123') {
      // In a real app, we would generate a JWT token here
      const token = 'mock-jwt-token-xyz-123';
      return { success: true, user: ADMIN_USER, token };
    }

    return { success: false };
  },

  verifySession: async (token: string): Promise<User | null> => {
    // In a real app, we would verify the JWT signature
    if (token === 'mock-jwt-token-xyz-123') {
      return ADMIN_USER;
    }
    return null;
  }
};
