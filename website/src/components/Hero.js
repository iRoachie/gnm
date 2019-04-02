import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Container } from './styles';

const Hero = ({ data }) => (
  <Content>
    <Backdrop />

    <Background fluid={data.thumbnail.fluid} />

    <Wrapper>
      <Container className="relative ml-0 md:ml-auto">
        <div className="py-20">
          <h2 className="font-light">{data.label}</h2>
          <Title>{data.title}</Title>
        </div>
      </Container>
    </Wrapper>
  </Content>
);

const Wrapper = styled.div.attrs({
  className: 'flex items-end absolute pin w-full h-full z-30',
})``;

const Backdrop = styled.div.attrs({
  className: 'absolute w-full h-full z-20',
})`
  background-color: #000;
  opacity: 0.2;
  transition: var(--link-transition);
  pointer-events: none;
`;

const Background = styled(Img).attrs({
  className: 'absolute z-10 pin',
})`
  height: 100%;
  width: 100%;
`;

const Content = styled.div.attrs({
  className: 'text-white relative',
})`
  height: 65vh;

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
