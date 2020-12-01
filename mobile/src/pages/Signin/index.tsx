import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';

import { Container, Title } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => {
  return(
    <Container>
      <Image source={logo} />
      <Title>Login into your account</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Password" />

      <Button onPress={() => {}}>Login</Button>
    </Container>
  );
}

export default Signin;