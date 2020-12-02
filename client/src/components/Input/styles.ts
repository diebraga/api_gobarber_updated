import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
    proops.isErrored &&
    css`
      border-color: red;
    `}

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

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: red;
    color: #fff;

    &::before {
      border-color: red transparent;
    }
  }
`;

