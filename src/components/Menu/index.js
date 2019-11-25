import React from 'react';

import { Container } from './styles';

import Book from '../../assets/book.svg';
import File from '../../assets/file.svg';
import Logo from '../../assets/logo.svg';
import Print from '../../assets/print.svg';

export default function Header() {
  return (
    <Container>
      <header>
        <img src={Logo} alt='Logo Wikipedia' />
      </header>

      <nav>
        <p>Main Page</p>
        <p>Contents</p>
        <p>Featured content</p>
        <p>Current events</p>
        <p>Random article</p>
        <p>Donate to Wikipedia</p>
        <p>Wikipedia Store</p>
      </nav>

      <footer>
        <img src={Book} alt='Book' />
        <img src={File} alt='File' />
        <img src={Print} alt='Print' />
      </footer>
    </Container>
  );
}
