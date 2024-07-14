
// LoginForm.jsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import authService from './authService';
=======
import { login } from '../authService'; 


const LoginForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setFieldError }) => {
    try {

      const result = await authService.login(values.email, values.password);
      localStorage.setItem('access_token', result.token);
      localStorage.setItem('refresh_token', result.refresh_token);
      navigate('/');
    } catch (error) {
      setFieldError('email', 'Invalid email or password');
      setFieldError('password', 'Invalid email or password');

      const result = await login(values.email, values.password); // Using named import
      if (result) {
        navigate('/profile');
      } else {
        setFieldError('email', 'Invalid email or password');
        setFieldError('password', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);

    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
