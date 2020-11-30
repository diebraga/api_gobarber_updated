import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowLeft
 } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('required'),
        email: Yup.string().required('required').email('Email not valid'),
        password: Yup.string().min(4, 'Min 4 dig'),
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
    <Background />
      <Content>
        <img src={logoImg} alt=""/>

        <Form ref={formRef} onSubmit={handleSubmit}>
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

        </Form>

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
