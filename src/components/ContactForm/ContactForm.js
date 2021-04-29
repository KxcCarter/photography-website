import React from 'react';
import { Formik, Field, Form, useField, FieldArray } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Select,
  MenuItem,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { StyleWrapper } from './ContactForm.styles';

const RadioChoicesWithLabels = ({ label, ...props }) => {
  const [field] = useField(props);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const CheckboxWithLabel = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
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
  name: yup.string().required('Please... I need this.'),
  phonenumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email(),
  message: yup.string().required('Just... just give me this.'),
});

const OPTIONS = [
  'Wedding',
  'Engagement',
  'Portrait',
  'Family',
  'Senior Portrait',
  'Other',
];

const ContactForm = () => {
  return (
    <StyleWrapper>
      <Formik
        initialValues={{
          name: '',
          phonenumber: '',
          email: '',
          referal: ['Google search', 'Instagram', 'From a friend', 'Other'],
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
            <div>
              <CustomTextField placeholder="Name" name="name" fullWidth />
            </div>

            <div>
              <CustomTextField placeholder="Phone" name="phonenumber" />
              <CustomTextField placeholder="Email" name="email" />
            </div>

            <div>
              <CheckboxWithLabel
                name="contactViaTextMessage"
                type="checkbox"
                label="Contact Via Text Message"
              />
            </div>

            <div>
              <FormControl>
                <FormLabel>Type of Shoot</FormLabel>
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
              <Field name="referal" type="select" as={Select}>
                <MenuItem value="Google">Google</MenuItem>
                <MenuItem value="Instagram">Instagram</MenuItem>
                <MenuItem value="From a friend">From a friend</MenuItem>
              </Field>
            </div>

            <div>
              <CustomTextField
                placeholder="Write a message"
                name="message"
                fullWidth
                multiline
                rows={4}
              />
            </div>

            <div>
              <Button
                disabled={isSubmitting}
                variant="contained"
                fullWidth
                type="submit"
              >
                submit
              </Button>
            </div>
            <prev>{JSON.stringify(values, null, 2)}</prev>
          </Form>
        )}
      </Formik>
    </StyleWrapper>
  );
};

export default ContactForm;
