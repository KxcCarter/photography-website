import React from 'react';
import Hero from '../components/Hero/Hero';
import { Formik, Field, Form } from 'formik';
import { Button, Checkbox, Radio } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import contact3 from '../images/contact3.jpg';

const Contact = () => {
  const OPTIONS = [
    'Wedding',
    'Engagement',
    'Portrait',
    'Family',
    'Senior Portrait',
    'Other',
  ];

  return (
    <div style={{ background: '#819d74' }}>
      <Hero image={contact3} title="Contact Me" />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phonenumber: '',
          email: '',
          referal: '',
          message: '',
          shootType: '',
          contactViaTextMessage: false,
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // make async call to save data somewhere on cloud.
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Field
              placeholder="First Name"
              name="firstName"
              type="input"
              as={TextField}
            />
            <Field
              placeholder="Last Name"
              name="lastName"
              type="input"
              as={TextField}
            />

            <div>
              <Field
                placeholder="Phone"
                name="phonenumber"
                type="input"
                as={TextField}
              />
              <Field
                placeholder="Email"
                name="email"
                type="input"
                as={TextField}
              />
            </div>

            <div>
              {OPTIONS.map((item, index) => (
                <Field
                  key={index}
                  name="shootType"
                  type="radio"
                  value={item}
                  as={Radio}
                />
              ))}

              <Field
                name="contactViaTextMessage"
                type="checkbox"
                as={Checkbox}
              />
            </div>
            <Field
              placeholder="How did you hear"
              name="referal"
              type="select"
              as={TextField}
            />
            <Field
              placeholder="lol what"
              name="message"
              type="input"
              as={TextField}
            />

            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
            <h3>{JSON.stringify(values, null, 2)}</h3>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
