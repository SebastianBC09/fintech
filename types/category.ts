export type Category = 'all' | 'account' | 'card' | 'investment' | 'insurance' | 'loan';

export const categoryLabels: Record<Category, string> = {
  all: 'Todos',
  account: 'Cuentas',
  card: 'Tarjetas',
  investment: 'Inversiones',
  insurance: 'Seguros',
  loan: 'Prestamo',
};
