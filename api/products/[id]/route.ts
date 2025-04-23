import { NextResponse } from 'next/server';
import { products } from '@/data/Products';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const item = products.find(p => p.id === params.id);
  if (!item) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(item);
}
