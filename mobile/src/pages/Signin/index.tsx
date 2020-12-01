import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';

import { Container, Title } from './styles';

const Signin: React.FC = () => {
  return(
    <Container>
      <Image source={logo} />
      <Title>Login into your account</Title>
    </Container>
  );
}

export default Signin;