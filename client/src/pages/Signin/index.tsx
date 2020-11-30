import React from 'react';
import { FiLogIn } from 'react-icons/fi'
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

          <input type="email" placeholder='email'/>

          <input type="password" placeholder='password'/>

          <button type='submit'>Login</button>

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
