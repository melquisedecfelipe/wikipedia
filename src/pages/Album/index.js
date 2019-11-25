import React from 'react';

import { Container } from './styles';

import Body from '../../components/Body';
import InformationAlbum from '../../components/InformationAlbum';

import Cover from '../../assets/cover.png';
import Era from '../../assets/albuns/1.png';
import Villains from '../../assets/albuns/2.png';

export default function Album() {
  const data = [
    {
      img: Era,
      name: 'Era Vulgaris (2007)'
    },
    {
      img: Villains,
      name: 'Villains (2017)'
    }
  ];

  return (
    <Container>
      <Body imagem={Cover} />
      <InformationAlbum data={data} />
    </Container>
  );
}
