import React from 'react';

import { Container } from './styles';

import Menu from '../Menu';
import Submenu from '../Submenu';

export default function Header() {
  return (
    <Container>
      <Menu />
      <Submenu />
    </Container>
  );
}
