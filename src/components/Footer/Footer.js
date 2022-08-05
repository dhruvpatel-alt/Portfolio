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
  <LinkItem href='tel:8141074592'>8141074592</LinkItem>
  </LinkColumn>
  <LinkColumn>
  <LinkTitle>Email</LinkTitle>
  <LinkItem href='mailto:yashvaghela015@gmail.com'>yashvaghela015@gmail.com</LinkItem>
  </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>Innovating one projet at a time</Slogan>
    </CompanyContainer>
  
  <SocialIcons href='https://github.com'>
            <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://twitter.com'>
            <AiFillTwitterSquare size='3rem'/>
        </SocialIcons>
        </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
