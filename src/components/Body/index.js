import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Queens from '../../assets/discography/1.png';
import Rated from '../../assets/discography/2.png';
import Songs from '../../assets/discography/3.png';
import Lullabies from '../../assets/discography/4.png';
import Era from '../../assets/discography/5.png';
import Like from '../../assets/discography/6.png';
import Villains from '../../assets/discography/7.png';

export default function Content({ imagem }) {
  const data = [
    {
      img: Queens,
      name: 'Queens of the Stone Age (1998)'
    },
    {
      img: Rated,
      name: 'Rated R (2000)'
    },
    {
      img: Songs,
      name: 'Songs for the Deaf (2002)'
    },
    {
      img: Lullabies,
      name: 'Lullabies to Paralyze (2005)'
    },
    {
      img: Era,
      name: 'Era Vulgaris (2007)'
    },
    {
      img: Like,
      name: '...Like Clockwork (2013)'
    },
    {
      img: Villains,
      name: 'Villains (2017)'
    }
  ];

  return (
    <Container>
      <div style={{ backgroundImage: `url(${imagem})` }}></div>
      {window.location.pathname !== '/like-clockwork' ? (
        <>
          <p>
            <strong>Queens of the Stone Age</strong> are an American rock band
            formed in 1996 in Palm Desert, California. The band's line-up
            includes founder Josh Homme (lead vocals, guitar, piano), Troy Van
            Leeuwen (guitar, lap steel, keyboard, percussion, backing vocals),
            Michael Shuman (bass guitar, keyboard, backing vocals), Dean Fertita
            (keyboards, guitar, percussion, backing vocals), and Jon Theodore
            (drums, percussion).
          </p>
          <p>
            Formed after the dissolution of Homme's previous band, Kyuss,[1]
            Queens of the Stone Age developed a style of riff-oriented, heavy
            rock music. Their sound has since evolved to incorporate a variety
            of different styles and influences, including working with Nirvana
            drummer and Foo Fighters frontman Dave Grohl, and Screaming Trees
            frontman Mark Lanegan who has been a steady contributor to the band.
          </p>
          <h2>Musical Style</h2>
          <p>
            Throughout its career, the band has been described as alternative
            rock, stoner rock,[88] alternative metal,[89][90] and hard rock.[91]
            Homme has described the band's self-titled debut album as driving
            music, angular and recorded dry,[92] with the album featuring solid
            and repetitive riffs in its song structure.[1] Rolling Stone
            magazine also noted a "connection between American meat-and-potatoes
            macho rock of the early 1970s, like Blue Cheer and Grand Funk
            Railroad, and the precision-timing drones in German rock of the same
            period."[93] .
          </p>
          <p>
            Homme has on numerous occasions described their music as "rock
            versions of electronic music," stating that he (indirectly) takes
            inspiration from the repetitive nature of electronic trance music
            along with various forms of dance music, hip-hop, trip hop and
            krautrock. This heavy rock style mixed with the structure of
            electronic music has been dubbed by Homme as "robot rock" in an
            interview with KUNO-TV at the Roskilde Festival 2001.[citation
            needed]
          </p>
          <p>
            In a 2013 interview with guitarist Matt Sweeney for Guitar Moves, a
            web series made by Vice Media's music channel Noisey, Homme revealed
            aspects of his distinctive guitar playing style.[100] He
            demonstrated the 'Josh Homme scale', which he claimed was the result
            of years playing and altering the blues scale. The scale has the
            intervals 1, b3, 3, b5, 5, 6, b7. His scale is the half whole scale
            with the second degree (b2) omitted.[101] In the same interview
            Homme referenced some of his earlier influences on his playing,
            citing both polka guitar styles and the techniques of Jimi Hendrix.
          </p>
          <h2>Discography</h2>
          <section>
            {data.map(elem => (
              <div key={elem.name}>
                {elem.img === Like ? (
                  <Link to='/like-clockwork'>
                    <img src={elem.img} alt={elem.name} />
                  </Link>
                ) : (
                  <img src={elem.img} alt={elem.name} />
                )}
                <p>{elem.name}</p>
              </div>
            ))}
          </section>
        </>
      ) : null}
    </Container>
  );
}
