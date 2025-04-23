import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'account-1',
    name: 'Cuenta Digital Plus',
    category: 'account',
    description: 'La cuenta sin comisiones que te ofrece todos los servicios bancarios modernos con la conveniencia digital que necesitas.',
    shortDescription: 'Cuenta sin comisiones con todos los servicios digitales',
    interestRate: 0.5,
    benefits: [
      'Sin comisiones de mantenimiento',
      'Transferencias ilimitadas',
      'App móvil avanzada',
      'Tarjeta débito sin costo'
    ],
    iconName: 'Bank',
    isNew: true,
    details: {
      minimumAmount: 0,
      fees: ['Sin comisión por transferencias', 'Sin comisión por retiros en cajeros propios'],
      requirements: ['Identificación oficial', 'Comprobante de domicilio']
    }
  },
  {
    id: 'account-2',
    name: 'Cuenta Premium',
    category: 'account',
    description: 'Disfruta de los beneficios exclusivos de nuestra cuenta premium con atención personalizado y beneficios únicos para clientes exigentes.',
    shortDescription: 'Nuestra cuenta con beneficios exclusivos para clientes premium',
    interestRate: 1.2,
    benefits: [
      'Atención personalizada 24/7',
      'Acceso a salas VIP en aeropuertos',
      'Seguro de viaje',
      'Tarjeta débito premium'
    ],
    iconName: 'CurrencyCircleDollar',
    details: {
      minimumAmount: 50000,
      fees: ['Sin comisión por transferencias internacionales', 'Sin comisión por retiros en cajeros globales'],
      requirements: ['Identificación oficial', 'Comprobante de domicilio', 'Comprobante de ingresos']
    }
  },
  {
    id: 'card-1',
    name: 'Tarjeta Oro',
    category: 'card',
    description: 'La tarjeta de crédito que recompensa cada compra con puntos y beneficios exclusivos en viajes y entretenimiento.',
    shortDescription: 'Tarjeta con recompensas en viajes y entretenimiento',
    interestRate: 32.5,
    benefits: [
      'Acumulación de 1.5 puntos por cada $1 gastado',
      'Seguro de viaje',
      'Descuentos en restaurantes selectos',
      'Sin anualidad el primer año'
    ],
    iconName: 'CreditCard',
    details: {
      minimumAmount: 25000,
      fees: ['Anualidad: $1,200 después del primer año', 'Interés moratorio: 59.9% anual'],
      requirements: ['Ingresos mínimos de $25,000 mensuales', 'Buen historial crediticio']
    }
  },
  {
    id: 'card-2',
    name: 'Tarjeta Platinum',
    category: 'card',
    description: 'La tarjeta de crédito premium con los mejores beneficios del mercado y servicio de concierge exclusivo.',
    shortDescription: 'Nuestra tarjeta premium con beneficios exclusivos',
    interestRate: 28.9,
    benefits: [
      'Acumulación de 2 puntos por cada $1 gastado',
      'Concierge personal 24/7',
      'Acceso a más de 1,200 salas VIP en aeropuertos',
      'Seguro de viaje premium'
    ],
    iconName: 'CreditCard',
    isPromoted: true,
    details: {
      minimumAmount: 50000,
      fees: ['Anualidad: $3,600', 'Interés moratorio: 56.9% anual'],
      requirements: ['Ingresos mínimos de $50,000 mensuales', 'Excelente historial crediticio']
    }
  },
  {
    id: 'investment-1',
    name: 'Fondo de Inversión Moderado',
    category: 'investment',
    description: 'Fondo de inversión balanceado con una estrategia de crecimiento moderado a mediano plazo.',
    shortDescription: 'Inversión balanceada con crecimiento a mediano plazo',
    interestRate: 7.5,
    riskLevel: 'medium',
    benefits: [
      'Diversificación en múltiples instrumentos',
      'Liquidez en 72 horas',
      'Rendimientos históricos por encima de inflación',
      'Rebalanceo automático de cartera'
    ],
    iconName: 'ChartLineUp',
    details: {
      minimumAmount: 10000,
      term: 'Recomendado mínimo 2 años',
      fees: ['Comisión por administración: 1.5% anual'],
      requirements: ['Contrato de inversión']
    },
    performanceData: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      values: [1.2, 1.8, 2.5, 2.1, 2.8, 3.2, 3.5, 3.8, 4.0, 4.5, 5.0, 5.5]
    }
  },
  {
    id: 'investment-2',
    name: 'Fondo de Renta Variable',
    category: 'investment',
    description: 'Fondo de inversión en renta variable enfocado en crecimiento agresivo con horizonte a largo plazo.',
    shortDescription: 'Inversión en renta variable con enfoque en crecimiento',
    interestRate: 12.3,
    riskLevel: 'high',
    benefits: [
      'Potencial de altos rendimientos',
      'Exposición a mercados globales',
      'Gestión activa por expertos',
      'Informes trimestrales detallados'
    ],
    iconName: 'ChartLineUp',
    details: {
      minimumAmount: 25000,
      term: 'Recomendado mínimo 5 años',
      fees: ['Comisión por administración: 2.0% anual', 'Comisión por rendimiento: 10% sobre excedente'],
      requirements: ['Contrato de inversión', 'Perfil de riesgo compatible']
    },
    performanceData: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      values: [2.1, 1.8, 3.5, 4.1, 3.8, 5.2, 6.5, 5.8, 7.0, 8.5, 9.0, 10.5]
    }
  },
  {
    id: 'investment-3',
    name: 'Fondo Conservador',
    category: 'investment',
    description: 'Fondo de inversión enfocado en preservación de capital con rendimientos estables.',
    shortDescription: 'Inversión conservadora con rendimientos estables',
    interestRate: 4.8,
    riskLevel: 'low',
    benefits: [
      'Baja volatilidad',
      'Rendimientos predecibles',
      'Disponibilidad a 24 horas',
      'Sin comisiones por retiro'
    ],
    iconName: 'ChartLineUp',
    isPromoted: true,
    details: {
      minimumAmount: 5000,
      term: 'Recomendado mínimo 1 año',
      fees: ['Comisión por administración: 0.8% anual'],
      requirements: ['Contrato de inversión']
    },
    performanceData: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      values: [0.4, 0.45, 0.38, 0.4, 0.42, 0.39, 0.41, 0.4, 0.42, 0.38, 0.4, 0.41]
    }
  },
  {
    id: 'insurance-1',
    name: 'Seguro de Vida Integral',
    category: 'insurance',
    description: 'Seguro de vida con cobertura integral que protege a tu familia y construye un patrimonio a largo plazo.',
    shortDescription: 'Protección familiar con construcción de patrimonio',
    benefits: [
      'Cobertura por fallecimiento',
      'Beneficio por invalidez',
      'Fondo de ahorro con rendimiento',
      'Asistencia funeraria'
    ],
    iconName: 'ShieldCheck',
    details: {
      minimumAmount: 500,
      term: 'Contrato anual renovable',
      fees: ['Prima mensual desde $500'],
      requirements: ['Cuestionario médico', 'Identificación oficial']
    }
  },
  {
    id: 'insurance-2',
    name: 'Seguro Médico Premium',
    category: 'insurance',
    description: 'El plan de seguro médico más completo con cobertura nacional e internacional y servicios exclusivos.',
    shortDescription: 'Cobertura médica premium nacional e internacional',
    benefits: [
      'Cobertura hospitalaria al 100%',
      'Red médica de primer nivel',
      'Atención en el extranjero',
      'Consultas ilimitadas'
    ],
    iconName: 'ShieldCheck',
    isNew: true,
    details: {
      minimumAmount: 1500,
      term: 'Contrato anual renovable',
      fees: ['Prima mensual desde $1,500'],
      requirements: ['Cuestionario médico', 'Historial clínico', 'Identificación oficial']
    }
  },
  {
    id: 'loan-1',
    name: 'Préstamo Personal Flexible',
    category: 'loan',
    description: 'Préstamo personal con condiciones flexibles para cualquier proyecto o necesidad, con aprobación rápida.',
    shortDescription: 'Préstamo adaptable para cualquier necesidad',
    interestRate: 16.9,
    benefits: [
      'Sin penalización por pagos anticipados',
      'Aprobación en 24 horas',
      'Plazo hasta 60 meses',
      'Sin comisión por apertura'
    ],
    iconName: 'HouseLine',
    details: {
      minimumAmount: 10000,
      term: 'De 12 a 60 meses',
      fees: ['Tasa de interés desde 16.9% anual', 'Sin comisión por apertura'],
      requirements: ['Ingresos mínimos comprobables de $10,000', 'Buen historial crediticio']
    }
  },
  {
    id: 'loan-2',
    name: 'Hipoteca Digital',
    category: 'loan',
    description: 'Crédito hipotecario con proceso 100% digital, tasas competitivas y condiciones flexibles.',
    shortDescription: 'Crédito hipotecario con proceso 100% digital',
    interestRate: 8.7,
    benefits: [
      'Tasa fija por toda la vida del crédito',
      'Financiamiento hasta del 90%',
      'Plazo hasta 20 años',
      'Seguimiento digital de tu solicitud'
    ],
    iconName: 'HouseLine',
    isPromoted: true,
    details: {
      minimumAmount: 500000,
      term: 'De 5 a 20 años',
      fees: ['Tasa de interés desde 8.7% anual', 'Comisión por apertura: 1%'],
      requirements: ['Ingresos mínimos comprobables de $30,000', 'Buen historial crediticio', 'Antigüedad laboral de 2 años']
    }
  }
];

export default products;