import styled, { css } from 'styled-components';

export const Container = styled.div`
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

