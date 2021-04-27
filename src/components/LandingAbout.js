import React from 'react';
import { Wrapper } from './LandingAbout.styles';

const LandingAbout = (props) => {
  return (
    <Wrapper>
      <div className="about">
        <h1>H. Raymond Carter</h1>
        <p>
          Born into a musical family, Kenneth began playing music at the age of
          5. He played the cello in orchestras throughout his teenage years,
          during which time he also began to learn to compose orchestral music.
          Kenneth composed the recessional music for his high school graduation
          and shortly after that his first orchestral piece was debuted by the
          Heritage Philharmonic. Kenneth studied music theory and jazz privately
          for 7 years with Phil Rogers and attended the Conservatory of Music
          and Dance at UMKC for Music Composition. He now lives and works in
          Boston, Massachusetts where he spends his free time composing, working
          on his screenplay, and forgetting to eat. His favorite composers
          include but are not limited to the following: Sergei Prokofiev, Howard
          Shore, Gustav Mahler, Philip Glass, Claude Debussy, Maurice Ravel,
          Johannes Brahms, Aram Khachaturian, Igor Stravinsky, Alexander
          Borodin, Manuel de Falla.
        </p>
      </div>
    </Wrapper>
  );
};

export default LandingAbout;
