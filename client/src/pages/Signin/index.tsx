import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => {
  return (
    <>
    <Container>
      <Content>
        <img src={logoImg} alt=""/>

        <form action="">
          <h1>Login into your account.</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Your password"
            />

          <Button type='submit'>Login</Button>

          <a href="forgot">I forgot my password</a>
        </form>

        <a href="login">
          <FiLogIn />
          Create account.
        </a>
      </Content>

      <Background />
    </Container>
    </>
  );
};

export default Signin;
