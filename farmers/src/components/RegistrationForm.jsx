import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import * as authService from '../authService'; // Assuming authService.js is in the same directory

const RegisterForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    password2: Yup.string().required('Confirmation password is required').min(6, 'Confirmation Password must be at least 6 characters').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    gender: Yup.string().required('Gender is required')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await authService.register(values.email, values.name, values.password, values.gender);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', name: '', password: '', password2: '', gender: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />

          <Field type="password" name="password2" placeholder="Confirmation password" />
          <ErrorMessage name="password2" component="div" />

          <Field type="text" name="gender" placeholder="Gender" />
          <ErrorMessage name="gender" component="div" />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
