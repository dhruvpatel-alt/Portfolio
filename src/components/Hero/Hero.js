import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
    Welcome to my web development portfolio website! My name is Dhruv and I am a web developer with experience in creating dynamic and responsive websites. On this site, you will find a selection of my previous work, including a variety of projects I have built using HTML, CSS, JavaScript, and various web development frameworks. I specialize in creating modern, user-friendly websites that are optimized for both desktop and mobile devices. If you have any questions or would like to discuss a potential project, please feel free to contact me. Thank you for visiting!
    </SectionText>
    <Button onClick={ () => window.location = 'https://google.com'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;