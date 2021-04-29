import React from 'react';
import Hero from '../components/Hero/Hero';
import { Formik, Field, Form, useField } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import contact3 from '../images/contact3.jpg';

const RadioChoicesWithLabels = ({ label, ...props }) => {
  const [field] = useField(props);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const CustomTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      {...field}
      {...props}
      placeholder={placeholder}
      helperText={errorText}
      variant="outlined"
      error={!!errorText}
    />
  );
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstName: yup.string().required('Please... I need this.'),
  lastName: yup.string().required(),
  phonenumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email(),
  message: yup.string().required('Just... just give me this.'),
});

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
          otherShootExplaination: '',
          contactViaTextMessage: false,
        }}
        validationSchema={validationSchema}
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
            <CustomTextField
              placeholder="First Name"
              name="firstName"
              type="input"
            />

            <CustomTextField
              placeholder="Last Name"
              name="lastName"
              type="input"
            />

            <div>
              <CustomTextField
                placeholder="Phone"
                name="phonenumber"
                type="input"
              />
              <CustomTextField placeholder="Email" name="email" type="input" />
            </div>

            <div>
              <FormControl>
                {OPTIONS.map((item, index) => (
                  <RadioChoicesWithLabels
                    key={index}
                    name="shootType"
                    type="radio"
                    value={item}
                    label={item}
                  />
                ))}
              </FormControl>

              {values.shootType === 'Other' ? (
                <Field
                  placeholder="Please Explain"
                  name="otherShootExplaination"
                  type="input"
                  as={TextField}
                />
              ) : null}
            </div>
            <div>
              <Field
                name="contactViaTextMessage"
                type="checkbox"
                as={Checkbox}
              />
            </div>

            <div>
              <CustomTextField
                placeholder="How did you hear"
                name="referal"
                type="select"
              />
            </div>

            <div>
              <CustomTextField
                placeholder="Write a message"
                name="message"
                type="input"
                fullWidth
              />
            </div>

            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
            <prev>{JSON.stringify(values, null, 2)}</prev>
            {/* <prev>{JSON.stringify(, null, 2)}</prev> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
