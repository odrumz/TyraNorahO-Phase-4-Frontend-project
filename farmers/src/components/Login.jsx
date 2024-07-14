import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission without axios
    console.log('Form submitted with values:', values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
