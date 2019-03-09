import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import { Container } from './styles';

const Hero = ({ data }) => (
  <Content fluid={data.thumbnail.fluid} backgroundColor="#040e18">
    <Backdrop />
    <Container className="relative">
      <div class="py-20">
        <h2 className="font-light">{data.label}</h2>
        <Title>{data.title}</Title>
      </div>
    </Container>
  </Content>
);

const Backdrop = styled.div.attrs({
  className: 'absolute w-full h-full',
})`
  background-color: #000;
  opacity: 0.2;
  transition: var(--link-transition);
  pointer-events: none;
`;

const Content = styled(BackgroundImage).attrs({
  className: 'flex items-end text-white',
})`
  height: 60vh;

  &:hover {
    ${Backdrop} {
      opacity: 0;
    }
  }
`;

const Title = styled.h1.attrs({
  className: 'text-5xl',
})`
  max-width: 400px;
`;

export default Hero;
