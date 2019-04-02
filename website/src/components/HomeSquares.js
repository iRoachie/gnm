import React from 'react';
import styled from 'styled-components';

export const HomeSquares = () => (
  <Container>
    <HomeSquare />
    <HomeSquare />
    <HomeSquare />
    <HomeSquare />
  </Container>
);

const Container = styled.section.attrs({
  className: 'flex justify-between overflow-x-scroll',
})`
  height: 250px;
`;

const HomeSquare = () => (
  <SquareContainer>
    <SquareCover />

    <SquareThumbnail src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />

    <SquareContent>
      <SquareSubTitle>Study the</SquareSubTitle>
      <SquareTitle>Bible with us</SquareTitle>
    </SquareContent>
  </SquareContainer>
);

const SquareCover = styled.div.attrs({
  className: 'absolute pin w-full h-full z-20',
})`
  background-color: #000;
  opacity: 0.2;
  transition: var(--link-transition);
`;

const SquareContainer = styled.div.attrs({
  className: 'inline-block flex-1 relative items-end flex',
})`
  &:hover {
    ${SquareCover} {
      opacity: 0;
    }
  }

  min-width: 350px;
`;

const SquareThumbnail = styled.img.attrs({
  className: 'absolute pin w-full h-full z-10',
})``;

const SquareContent = styled.div.attrs({
  className: 'relative z-30 pb-8 pl-8',
})``;

const SquareSubTitle = styled.p.attrs({ className: 'text-white text-xl' })``;
const SquareTitle = styled.h3.attrs({ className: 'text-white text-xl' })``;
