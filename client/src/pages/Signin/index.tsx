import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('required').email('Email not valid'),
        password: Yup.string().min(4, 'min 4 dig'),
      });
      console.log(data);

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);


    }
  }, []);

  return (
    <>
    <Container>
      <Content>
        <img src={logoImg} alt=""/>

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

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
