import React from 'react';

import { Container } from './styles';

export default function Information(props) {
  const { data } = props;

  return (
    <Container>
      <h2>…Like Clockwork</h2>
      <small>Studio album by Queens of the Stone Age</small>

      <h5>Released</h5>
      <p className='released'>June 3, 2013</p>

      <h5>Recorded</h5>
      <p>August 9, 2012 – March 9, 2013</p>

      <h5>Genres</h5>
      <ul>
        <li>Alternative Rock</li>
        <li>Stoner Rock</li>
        <li>Hard Rock</li>
        <li>Alternative Metal</li>
      </ul>

      <h5>Length</h5>
      <p>45:59</p>

      <h5 className='chronology'>Chronology</h5>
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
