import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { MainLayout } from '@/layout/MainLayout';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FinTech Landing',
  description: 'Catálogo de productos financieros digitales',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainLayout>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </MainLayout>
      </body>
    </html>
  );
}
