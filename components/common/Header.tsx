'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { List, X } from 'phosphor-react';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid rgba(15, 76, 129, 0.1);
  padding: 1.25rem 2.5rem;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 10px rgba(15, 76, 129, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(15, 76, 129, 0.08);
  }
`;

const Nav = styled.nav.attrs({
  role: 'navigation',
  'aria-label': 'Menú principal',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f4c81;
  letter-spacing: -0.5px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30px;
    height: 3px;
    background: linear-gradient(90deg, #4caf50, #ffd700);
    border-radius: 2px;
  }
`;

const Menu = styled.ul<{ open?: boolean }>`
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    background: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    box-shadow: 0 8px 16px rgba(15, 76, 129, 0.1);
    border-top: 1px solid rgba(15, 76, 129, 0.1);
    z-index: 40;
    gap: 1.5rem;
  }
`;

const MenuItem = styled.li`
  position: relative;

  a {
    text-decoration: none;
    color: #424242;
    font-weight: 500;
    font-size: 1.05rem;
    padding: 0.5rem 0;
    transition: color 0.2s ease;
    position: relative;

    &:hover,
    &:focus {
      color: #0f4c81;
      text-decoration: none;

      &:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #0f4c81;
      transform: scaleX(0);
      opacity: 0;
      transition: all 0.3s ease;
      transform-origin: left center;
    }
  }
`;

const LoginMenuItem = styled(MenuItem)`
  a {
    background-color: #0f4c81;
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(15, 76, 129, 0.2);

    &:hover,
    &:focus {
      background-color: #0a3e6a;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(15, 76, 129, 0.3);
    }

    &:after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    a {
      display: inline-block;
    }
  }
`;

const Burger = styled.button.attrs({
  'aria-label': 'Abrir menú',
})`
  display: none;
  background: none;
  border: none;
  color: #0f4c81;
  font-size: 1.75rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

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
        <Burger aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </Burger>
        <Menu id="mobile-menu" open={open}>
          <MenuItem>
            <Link href="/">Inicio</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/#productos">Productos</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/#nosotros">Nosotros</Link>
          </MenuItem>
          <LoginMenuItem>
            <Link href="/#login">Acceder</Link>
          </LoginMenuItem>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
};
