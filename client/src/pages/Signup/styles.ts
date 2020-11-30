import styled from 'styled-components';
import { shade } from 'polished';
import BackgroundImg from '../../assets/background-2.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px, 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  a {
    color: #fff;
    transition: color 0.2s;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  > a {
    color: #fff;
    transition: color 0.2s;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    svg {
      margin-right: 15px;
    }

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat, center;
`;
