'use client'
import { FC, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Nav = styled.nav.attrs({
  role: 'navigation',
  'aria-label': 'Menú principal',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0F4C81;
`;

const Menu = styled.ul<{ open?: boolean }>`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    background: #fff;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: #212121;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Burger = styled.button.attrs({
  'aria-label': 'Abrir menú',
})`
  display: none;
  background: none;
  border: none;
  font-size: 1.75rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>FinTech</Logo>
        <Burger
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </Burger>
        <Menu id="mobile-menu" open={open}>
          <MenuItem><Link href="/">Inicio</Link></MenuItem>
          <MenuItem><Link href="/#productos">Productos</Link></MenuItem>
          <MenuItem><Link href="/#nosotros">Nosotros</Link></MenuItem>
          <MenuItem><Link href="/#login">Acceder</Link></MenuItem>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
}
