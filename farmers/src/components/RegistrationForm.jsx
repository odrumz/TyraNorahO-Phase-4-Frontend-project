import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import authService from 'authService';
const RegisterForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    password2: Yup.string().required('Confirmation password is required').min(6, ' Confirmation Password must be at least 6 characters'),
    gender: Yup.string().required('Gender is required')  
  });

  const handleSubmit = async (values) => {
    try {
      await authService.register(values.email, values.name, values.password,  values.password2, values.gender);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', name: '', password: '', password2: '',gender: '', }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <Field type="password" name="password2" placeholder="Confirmation password" /> 
        <ErrorMessage name="password" component="div" />

        <Field type="text" name="gender" placeholder="Gender" /> 
        <ErrorMessage name="gender" component="div" />


        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;