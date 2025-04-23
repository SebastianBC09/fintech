import { NextResponse } from 'next/server';
import { products } from '@/data/Products';

export async function GET(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const item = products.find(p => p.id === id) || null;
  if (!item) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(item);
}
