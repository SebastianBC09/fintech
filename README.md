# FinTech Landing

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-blue)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-cyan)](https://tailwindcss.com/)  
[![Styled Components](https://img.shields.io/badge/Styled–Components-5.x-purple)](https://styled-components.com/)  
[![Framer Motion](https://img.shields.io/badge/Framer–Motion-10.x-magenta)](https://www.framer.com/motion/)  
[![Phosphor Icons](https://img.shields.io/badge/Phosphor–React-1.x-green)](https://phosphoricons.com/)  

Landing page para fintech o banco digital con catálogo de productos financieros, filtros, detalle de cada producto, y un diseño profesional, accesible y “mobile-first”.

---

## 📚 Tabla de Contenidos

1. 🔍 [Descripción del Proyecto](#-descripción-del-proyecto)  
2. 🚀 [Características](#-características)  
3. 📂 [Estructura del Proyecto](#-estructura-del-proyecto)  
4. ⚙️ [Configuración y Ejecución Local](#-configuración-y-ejecución-local)  
5. 🛠️ [Decisiones Técnicas y Arquitectónicas](#-decisiones-técnicas-y-arquitectónicas)  
6. 💡 [Desafíos y Soluciones](#-desafíos-y-soluciones)  
7. ❓ [Preguntas Complementarias](#-preguntas-complementarias)  
8. 👨‍💻 [Autor](#-autor)  
9. 📄 [Licencia](#-licencia)  

---

## 🔍 Descripción del Proyecto

FinTech Landing muestra:

- **Home**: Hero animado con gradientes y microinteracciones, sección de features, tabs de filtro y grid de productos mockeados.  
- **Detalle** (`/product/[id]`): Información completa del producto, gráfico de rendimiento, indicadores de riesgo y navegación clara.  
- **UI**: TailwindCSS para layout base; Styled Components para componentes visuales reutilizables.  
- **Animaciones**: Framer Motion para entradas, hover y feedback de usuario; Phosphor React para iconos.  
- **Mock API**: Hook `useProducts` que simula latencia, carga asíncrona y manejo de errores.  

Diseño “mobile-first”, accesible (ARIA, foco, contraste) y con performance optimizada.

---

## 🚀 Características

- **Next.js App Router** con layouts anidados y SSR.  
- **TypeScript** estricto en toda la base de código.  
- **Tailwind CSS** para utilidades, breakpoints y fondo de gradiente.  
- **Styled Components** para encapsular estilos de badges, cards, hero, etc.  
- **Framer Motion** para animaciones de carga, hover y transiciones de página.  
- **Phosphor React** como librería de iconos moderna.  
- **Accesibilidad (a11y)**: roles ARIA, navegación por teclado y contraste ≥4.5:1.  
- **Hook personalizado** con delays simulados (`simulateDelay`) para una UX más realista.  

---

## 📂 Estructura del Proyecto

```
fintech-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx         # RootLayout + MainLayout + StyledComponentsRegistry
│   ├── page.tsx           # Home
│   └── product/
│       └── [id]/page.tsx  # Product detail
├── components/
│   ├── common/            # Header, Footer, Badge, TabFilter, LoadingState, Notification…
│   ├── home/              # ProductGrid
│   └── product/           # ProductDetailHeader, ProductFeatures, PerformanceChart…
├── data/
│   └── products.ts        # Mock data (8–12 productos)
├── hooks/
│   └── useProducts.ts     # Gestión de productos, filtros y detalle
├── lib/
│   └── registry.tsx       # SSR de Styled Components
├── types/
│   ├── category.ts
│   └── product.ts
├── utils/
│   └── formatters.ts
├── package.json
└── README.md              # Documentación
```

---

## ⚙️ Configuración y Ejecución Local

1. **Clonar repositorio**  
   ```bash
   git clone https://github.com/sebastianballenc/fintech-landing.git
   cd fintech-landing
   ```
2. **Instalar dependencias**
   ```bash
   npm install
   # o yarn
   ```
3. **Desarrollo**
   ```bash
   npm run dev
   ```  
   Abre http://localhost:3000
4. **Producción**
   ```bash
   npm run build
   npm run start
   ```

---

## 🛠️ Decisiones Técnicas y Arquitectónicas

- **Next.js App Router**: Permite layouts anidados, streaming SSR y separación clara de páginas.
- **TailwindCSS vs Styled Components**:
    - _Tailwind_ para estructuras de layout, utilidades rápidas y gradientes globales.
    - _Styled Components_ para encapsular lógica de estilos en componentes complejos (badges, hero, cards) y aprovechar props dinámicas.
- **SSR de Styled Components**: `StyledComponentsRegistry` con `ServerStyleSheet` y `useServerInsertedHTML` para evitar flash de estilo.
- **Framer Motion**: Animaciones de entrada (`initial`/`animate`), microinteracciones (`whileHover`/`whileTap`) y stagger en grids.
- **Custom Hook** (`useProducts`): Simula delays de API reales (`simulateDelay`), estados de carga/error, filtros y búsqueda por ID.

---

## 💡 Desafíos y Soluciones

- **Simulación de API**:
    - Retardo artificial con `simulateDelay` para mostrar LoadingState y gestionar UX real.
- **Tipado de iconos**:
    - Se utiliza `iconName: string` y un `iconMap` tipado con las claves de Phosphor React, evitando ReactNodes en los datos.
- **Accesibilidad**:
    - Roles ARIA en tabs, badges y notificaciones; foco visible en botones y enlaces; buen contraste de colores.
- **SSR Styled Components**:
    - Evitar FOUC (Flash of Unstyled Content) y duplicados de `<style>` mediante SSR registry.

---

## ❓ Preguntas Complementarias

1. **¿Qué criterios seguiste para diseñar la UI de productos financieros?**
    - Claridad: Información clave (tasa, riesgo, categoría) destacada con badges y tipografía jerárquica.
    - Confianza: Paleta basada en azul profundo (#0F4C81) y toques verdes/dorados para premium.
    - Consistencia: Componentes reutilizables y patrones visuales homogéneos.

2. **¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?**
    - _Tailwind_: rapid prototyping, utilidades de espaciado, flex/grid, colores globales.
    - _Styled Components_: lógica de estilos condicional basada en props (e.g., `$isActive`, variantes de badge) y encapsulación de animaciones.

3. **¿Qué harías para escalar este proyecto en una aplicación real de banca digital?**
    - Migrar a un CMS o microservicio para datos finales, reemplazar mock por API real.
    - Implementar autenticación/OAuth y gestión de sesiones seguras.
    - Añadir caché de datos con SWR o React Query y SSR incremental.

4. **¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?**
    - **Vercel Analytics** y **Web Vitals** para metricas de Core Web Vitals.
    - **Sentry** para captura de errores en cliente/servidor.
    - **Lighthouse CI** en pipeline de CI/CD para auditorías automáticas.

---

## 👨‍💻 Autor

**Sebastian Ballen C** – Frontend Developer
- GitHub: https://github.com/sebastianballenc
- LinkedIn: https://www.linkedin.com/in/sebastianballencastaneda-softwaredeveloper
- Email: sebastian.ballenc@gmail.com

---

## 📄 Licencia

MIT © 2025 Sebastian Ballen C