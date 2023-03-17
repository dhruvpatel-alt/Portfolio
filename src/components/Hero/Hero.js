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
    Welcome to my web development portfolio website! My name is Dhruv, and I am an experienced web developer with a passion for creating dynamic and responsive websites. I specialize in building modern, user-friendly websites that are optimized for both desktop and mobile devices. Here, you can find a selection of my previous work, including a variety of projects that I have built using React JS, Node JS, and various web development frameworks. In addition, I have extensive experience in creating APIs using Python Flask, which can add more features and functionalities to website. If you have any questions , please do not hesitate to contact me. Thank you for taking the time to visit my website!
    </SectionText>
    <Button onClick={ () => window.location = 'https://google.com'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;
