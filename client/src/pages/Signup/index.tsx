import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signup: React.FC = () => {
  return (
    <>
    <Container>
    <Background />
      <Content>
        <img src={logoImg} alt=""/>

        <form action="">
          <h1>Register your account.</h1>
          <Input name="name" icon={FiUser} placeholder="name" />
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
          <FiArrowLeft />
          Back to login.
        </a>
      </Content>

    </Container>
    </>
  );
};

export default Signup;
