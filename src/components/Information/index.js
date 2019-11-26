import React from 'react';

import { Container } from './styles';

import Translate from '../../assets/translate.svg';

export default function Information({ data }) {
  const { title, origin, year, genres, info, image, subtitle } = data;

  return (
    <Container>
      <img src={Translate} alt='Translate' />
      <h2>{title}</h2>
      {subtitle ? <small>Studio album by Queens of the Stone Age</small> : null}

      <h5>{origin.name}</h5>
      <p className='origin'>{origin.description}</p>

      <h5>{year.name}</h5>
      <p>{year.description}</p>

      <h5>{genres.name}</h5>
      <ul>
        {genres.description.map(elem => (
          <li key={elem}>{elem}</li>
        ))}
      </ul>

      <h5>{info.name}</h5>
      <p>{info.description}</p>

      <h5 className='image'>{image.name}</h5>
      <section>
        {image.description.map(elem => (
          <div key={elem.name}>
            <img src={elem.img} alt={elem.name} />
            <p>{elem.name}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
