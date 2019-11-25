import React from 'react';

import { Container } from './styles';

import Body from '../../components/Body';
import Information from '../../components/Information';

import Dean from '../../assets/members/dean-fertita.png';
import Jon from '../../assets/members/jon-theodore.png';
import Josh from '../../assets/members/josh-homme.png';
import Michael from '../../assets/members/michael-shuman.png';
import Queens from '../../assets/queens.png';
import Troy from '../../assets/members/troy-van-leeuwen.png';

export default function Main() {
  const data = [
    {
      img: Josh,
      name: 'Josh Homme'
    },
    {
      img: Troy,
      name: 'Troy Van Leeuwen'
    },
    {
      img: Dean,
      name: 'Dean Fertita'
    },
    {
      img: Michael,
      name: 'Michael Schuman'
    },
    {
      img: Jon,
      name: 'Jon Theodore'
    }
  ];

  return (
    <Container>
      <Body imagem={Queens} />
      <Information data={data} />
    </Container>
  );
}
