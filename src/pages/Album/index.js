import React from 'react';

import { Container } from './styles';

import Body from '../../components/Body';
import Information from '../../components/Information';

import Cover from '../../assets/cover.png';
import Era from '../../assets/albuns/1.png';
import Villains from '../../assets/albuns/2.png';

export default function Album() {
  const data = {
    title: '…Like Clockwork',
    origin: {
      name: 'Released',
      description: 'June 3, 2013'
    },
    year: {
      name: 'Recorded',
      description: 'August 9, 2012 – March 9, 2013'
    },
    genres: {
      name: 'Genres',
      description: [
        'Alternative Rock',
        'Stoner Rock',
        'Hard Rock',
        'Alternative Metal'
      ]
    },
    info: {
      name: 'Length',
      description: '45:59'
    },
    image: {
      name: 'Chronology',
      description: [
        {
          img: Era,
          name: 'Era Vulgaris (2007)'
        },
        {
          img: Villains,
          name: 'Villains (2017)'
        }
      ]
    },
    subtitle: true
  };

  return (
    <Container>
      <Body imagem={Cover} />
      <Information data={data} />
    </Container>
  );
}
