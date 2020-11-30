import React, { ButtonHTMLAttributes } from 'react';

import { ButtonComponent } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <ButtonComponent type="button" {...rest}>
        {children}
      </ButtonComponent>
    </>
  );
};

export default Button;

