import { FC } from 'react';
import styled from 'styled-components';
import { Envelope, LinkedinLogo, TwitterLogo } from 'phosphor-react';

const FooterContainer = styled.footer`
    background: linear-gradient(to right, #f7f9fc, #f5f7fa);
    padding: 4rem 2.5rem 3rem;
    color: #424242;
    position: relative;
    border-top: 1px solid rgba(15, 76, 129, 0.08);

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, #0F4C81 70%, #4CAF50, #FFD700);
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const Title = styled.h4`
    font-weight: 700;
    margin-bottom: 1rem;
    color: #0F4C81;
    font-size: 1.15rem;
    position: relative;
    padding-bottom: 0.75rem;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 2rem;
        height: 2px;
        background-color: #4CAF50;
    }
`;

const LinkItem = styled.a`
    color: #424242;
    text-decoration: none;
    padding: 0.4rem 0;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    display: inline-block;
    position: relative;
    width: fit-content;

    &:hover {
        color: #0F4C81;
        transform: translateX(4px);
    }
`;

const FinTechDescription = styled.p`
    line-height: 1.6;
    color: #535353;
    margin-bottom: 1rem;
`;

const Bottom = styled.div`
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  font-size: 0.875rem;
  text-align: center;
  color: #757575;
  border-top: 1px solid rgba(15, 76, 129, 0.1);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const SocialLink = styled(LinkItem)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateX(0) scale(1.02);
  }
`;

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <Grid>
        <Column>
          <Title>FinTech</Title>
          <FinTechDescription>Soluciones digitales innovadoras para tus finanzas personales y empresariales.</FinTechDescription>
        </Column>
        <Column>
          <Title>Enlaces rápidos</Title>
          <LinkItem href="/">Inicio</LinkItem>
          <LinkItem href="/#productos">Productos</LinkItem>
          <LinkItem href="/contacto">Contacto</LinkItem>
        </Column>
        <Column>
          <Title>Legal</Title>
          <LinkItem href="/terminos">Términos</LinkItem>
          <LinkItem href="/privacidad">Privacidad</LinkItem>
          <LinkItem href="/cookies">Cookies</LinkItem>
        </Column>
        <Column>
          <Title>Contacto</Title>
          <SocialLink href="mailto:email@fintech.com">
            <Envelope size={18} weight="regular" color="#0F4C81" />
            email@fintech.com
          </SocialLink>
          <SocialLink href="#">
            <LinkedinLogo size={18} weight="regular" color="#0F4C81" />
            LinkedIn
          </SocialLink>
          <SocialLink href="#">
            <TwitterLogo size={18} weight="regular" color="#0F4C81" />
            Twitter
          </SocialLink>
        </Column>
      </Grid>
      <Bottom>© 2025 FinTech. Todos los derechos reservados.</Bottom>
    </FooterContainer>
  );
}