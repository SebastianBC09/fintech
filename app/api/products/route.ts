import { NextResponse } from 'next/server';
import { products } from '@/data/Products';

export async function GET() {
  try {
    if (!products || products.length === 0) {
      return NextResponse.json({ message: 'No hay productos disponibles' }, { status: 404 });
    }
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
