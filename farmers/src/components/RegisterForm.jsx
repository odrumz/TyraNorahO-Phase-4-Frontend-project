import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import authService from './authService';
import '../RegisterForm.css';  // Ensure the path is correct
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    name: Yup.string().required('Name is required'),
    password1: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords must match').required('Confirm Password is required'),
    gender: Yup.string().required('Gender is required')
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);
      await authService.register(values.email, values.name, values.password1, values.password2, values.gender);
      setSubmitting(false);
      navigate('/loginform');  // Correct usage of navigate
    } catch (error) {
      setSubmitting(false);
      setErrors({ apiError: error.message || 'Registration failed' });
    }
  };

  return (
    <Formik
      initialValues={{ email: '', name: '', password1: '', password2: '', gender: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className="register-form">
          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <Field type="password" name="password1" placeholder="Password" />
            <ErrorMessage name="password1" component="div" />
          </div>
          <div>
            <Field type="password" name="password2" placeholder="Confirm Password" />
            <ErrorMessage name="password2" component="div" />
          </div>
          <div>
            <Field as="select" name="gender">
              <option value="" label="Select gender" />
              <option value="male" label="Male" />
              <option value="female" label="Female" />
              <option value="other" label="Other" />
            </Field>
            <ErrorMessage name="gender" component="div" />
          </div>
          {errors.apiError && <div className="error">{errors.apiError}</div>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
