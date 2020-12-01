import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #f4fde8;
  border: 2px solid #232129;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${proops =>
    proops.isFocused &&
    css`
      color: orange;
      border-color: orange;
    `}

  ${proops =>
    proops.isFilled &&
    css`
      color: orange;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    -webkit-box-shadow: 0 0 0 30px #232129 inset !important;
    -webkit-text-fill-color: #fff !important;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

