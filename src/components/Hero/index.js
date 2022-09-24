import React, { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from './HeroElements';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>MovieBuz</HeroH1>
          <HeroP>Book any movie instantly</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
