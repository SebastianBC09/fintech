'use client';
import { useState } from 'react';
import { LoadingState } from '@/components/common/LoadingState';
import { Notification } from '@/components/common/Notification';
import { ProductGrid } from '@/components/home/ProductGrid';
import { TabFilter } from '@/components/common/TabFilter';
import useProducts from '@/hooks/useProducts';
import { Category } from '@/types/category';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChartLineUp, Shield, CreditCard, Users } from 'phosphor-react';
import styled from 'styled-components';

const HeroSection = styled(motion.section)`
  padding: 5rem 2rem 6rem;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #0f4c81 0%, #1a365d 100%);
  color: white;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(15, 76, 129, 0.3);
`;

const BlurCircle = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(76, 175, 80, 0.2);
  filter: blur(60px);
  z-index: 0;
`;

const TopRightCircle = styled(BlurCircle)`
  top: -150px;
  right: -150px;
`;

const BottomLeftCircle = styled(BlurCircle)`
  bottom: -200px;
  left: -100px;
  background: rgba(255, 215, 0, 0.15);
  width: 300px;
  height: 300px;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(to right, #ffffff, #e0e8f0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 90%;
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  color: #0f4c81;
  font-weight: 600;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    background: #f5f5f5;
  }
`;

const ProductsSection = styled(motion.section)`
  padding: 2rem 0 4rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #212121;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #0f4c81, #4caf50);
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #535353;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const CTASection = styled(motion.section)`
  margin-top: 5rem;
  padding: 3rem 2.5rem;
  background: linear-gradient(to right, #f7f9fd, #f2f6fc);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(15, 76, 129, 0.1);
  border: 1px solid rgba(15, 76, 129, 0.1);
  position: relative;
  overflow: hidden;
`;

const CTAContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #0f4c81;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  color: #424242;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #0f4c81 0%, #1a365d 100%);
  color: white;
  font-weight: 600;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(15, 76, 129, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(15, 76, 129, 0.4);
  }
`;

const FeaturesSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 5rem 0 3rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(15, 76, 129, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(15, 76, 129, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(15, 76, 129, 0.12);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(15, 76, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #0f4c81;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #212121;
`;

const FeatureText = styled.p`
  color: #535353;
  line-height: 1.6;
`;

export default function Home() {
  const { products, isLoading, error, filterByCategory } = useProducts();
  const [category, setCategory] = useState<Category>('all');

  const onTabChange = (cat: Category) => {
    setCategory(cat);
    filterByCategory(cat);
  };

  return (
    <div>
      <HeroSection
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TopRightCircle />
        <BottomLeftCircle />
        <HeroContent>
          <HeroTitle>Soluciones financieras digitales</HeroTitle>
          <HeroSubtitle>
            Descubre nuestros productos diseñados para impulsar tu futuro económico con seguridad y
            tecnología de vanguardia.
          </HeroSubtitle>
          <ActionButton href="#productos">
            Comenzar ahora <ArrowRight size={20} weight="bold" className="ml-2" />
          </ActionButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        <FeatureCard>
          <FeatureIcon>
            <ChartLineUp size={28} weight="fill" />
          </FeatureIcon>
          <FeatureTitle>Inversiones Inteligentes</FeatureTitle>
          <FeatureText>
            Soluciones de inversión adaptadas a tu perfil de riesgo con tecnología avanzada.
          </FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <Shield size={28} weight="fill" />
          </FeatureIcon>
          <FeatureTitle>Seguridad Garantizada</FeatureTitle>
          <FeatureText>
            Protección de última generación para todas tus transacciones y datos personales.
          </FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <CreditCard size={28} weight="fill" />
          </FeatureIcon>
          <FeatureTitle>Pagos Digitales</FeatureTitle>
          <FeatureText>
            Gestiona tus pagos de forma rápida y segura desde cualquier dispositivo.
          </FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <Users size={28} weight="fill" />
          </FeatureIcon>
          <FeatureTitle>Asesoría Personalizada</FeatureTitle>
          <FeatureText>
            Acceso directo a expertos financieros para guiar tus decisiones económicas.
          </FeatureText>
        </FeatureCard>
      </FeaturesSection>

      <ProductsSection id="productos">
        <SectionHeader>
          <SectionTitle>Nuestros Productos</SectionTitle>
          <SectionSubtitle>
            Encuentra la opción perfecta para tus necesidades financieras con nuestra selección de
            servicios premium
          </SectionSubtitle>
          <TabFilter selected={category} onSelect={onTabChange} />
        </SectionHeader>

        {isLoading && <LoadingState />}
        {error && <Notification type="error" message={error} />}
        {!isLoading && !error && <ProductGrid products={products} />}
      </ProductsSection>

      <CTASection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <CTAContent>
          <CTATitle>¿Necesitas ayuda para elegir?</CTATitle>
          <CTAText>
            Nuestros asesores financieros están listos para ayudarte a encontrar la mejor solución
            para tus necesidades específicas.
          </CTAText>
          <CTAButton href="/#contact">
            Contactar a un asesor <ArrowRight size={20} weight="bold" className="ml-2" />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </div>
  );
}
