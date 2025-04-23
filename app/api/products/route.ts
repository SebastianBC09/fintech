import { NextResponse } from 'next/server';
import { products } from '@/data/Products';

export async function GET() {
  return NextResponse.json(products);
}
