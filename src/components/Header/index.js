import React from 'react';

import { Container } from './styles';

import Menu from '../Menu';
import Submenu from '../Submenu';

export default function Header() {
  return (
    <Container>
      <Menu />
      {window.location.pathname !== '/like-clockwork' ? <Submenu /> : null}
    </Container>
  );
}
