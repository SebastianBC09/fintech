'use client';
import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import styled from 'styled-components';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2.5rem 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 3rem;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fafafa, #ffffff);
`;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <PageWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageWrapper>
  );
};
