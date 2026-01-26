import { NextResponse } from 'next/server';
import { inquiryService } from '@/backend/services/inquiryService';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (status === 'ARCHIVED') {
      const success = await inquiryService.archive(id);
      if (success) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }

    if (status === 'READ') {
      const success = await inquiryService.markAsRead(id);
      if (success) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }
    
    return NextResponse.json({ error: 'Invalid status update' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update inquiry' }, { status: 500 });
  }
}
