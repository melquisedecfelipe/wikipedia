import React from 'react';

import { Container } from './styles';

export default function Information(props) {
  const { data } = props;

  return (
    <Container>
      <h2>Queens of the Stone Age</h2>

      <h5>Origin</h5>
      <p className='origin'>Palm Desert, California, U.S.</p>

      <h5>Years active</h5>
      <p>1996 - present</p>

      <h5>Genres</h5>
      <ul>
        <li>Alternative Rock</li>
        <li>Stoner Rock</li>
        <li>Hard Rock</li>
        <li>Alternative Metal</li>
      </ul>

      <h5>Website</h5>
      <p>qotsa.com</p>

      <h5 className='members'>Members</h5>
      <section>
        {data.map(elem => (
          <div key={elem.name}>
            <img src={elem.img} alt={elem.name} />
            <p>{elem.name}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
