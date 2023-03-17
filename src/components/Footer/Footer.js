import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
  <LinkColumn>
  <LinkTitle>Call</LinkTitle>
  <LinkItem href='tel:(+91) 9157832159'>(+91) 9157832159</LinkItem>
  </LinkColumn>
  <LinkColumn>
  <LinkTitle>Email</LinkTitle>
  <LinkItem href='mailto:yashvaghela015@gmail.com'>dp20021609@gmail.com</LinkItem>
  </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>Innovating one projet at a time</Slogan>
    </CompanyContainer>
  
  <SocialIcons href='https://github.com/dhruvpatel-alt'>
            <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/dhruv-patel-282a12252/'>
            <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://twitter.com/DhruvPa59792409'>
            <AiFillTwitterSquare size='3rem'/>
        </SocialIcons>
        </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
