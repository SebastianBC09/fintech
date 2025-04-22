import { FC } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f5f5f5;
  padding: 3rem 2rem;
  color: #424242;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h4`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const LinkItem = styled.a`
  color: #424242;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Bottom = styled.div`
  margin-top: 2rem;
  font-size: 0.875rem;
  text-align: center;
  color: #757575;
`;

export const Footer:FC = () => {
  return (
    <FooterContainer>
      <Grid>
        <Column>
          <Title>FinTech</Title>
          <p>Soluciones digitales para tus finanzas.</p>
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
          <LinkItem href="mailto:email@fintech.com">email@fintech.com</LinkItem>
          <LinkItem href="#">LinkedIn</LinkItem>
          <LinkItem href="#">Twitter</LinkItem>
        </Column>
      </Grid>
      <Bottom>© 2025 FinTech. Todos los derechos reservados.</Bottom>
    </FooterContainer>
  );
}
