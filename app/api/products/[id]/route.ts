import { NextResponse } from 'next/server';
import { products } from '@/data/Products';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const item = products.find(p => p.id === params.id);
    if (!item) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${params.id}:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
