import styled from 'styled-components';
import { screens } from '../../tailwind';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: ${screens.md}) {
    & {
      width: 750px;
    }
  }
  @media (min-width: ${screens.lg}) {
    & {
      width: 970px;
    }
  }
  @media (min-width: ${screens.xl}) {
    & {
      width: 1200px;
      max-width: calc(100% - 30px);
    }
  }
`;

export const Wrapper = styled.div.attrs({
  className: 'min-h-screen flex flex-col space-between',
})``;
