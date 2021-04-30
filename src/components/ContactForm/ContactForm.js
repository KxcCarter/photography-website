import React from 'react';
import { Formik, Field, Form, useField } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

//
import { StyleWrapper } from './ContactForm.styles';
//

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
      //   placeholder={placeholder}
      helperText={errorText}
      variant="filled"
      error={!!errorText}
      label={placeholder}
      size="small"
    />
  );
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup.string().required(),
  phonenumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email().required(),
  message: yup.string().required(),
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
          referral: '',
          message: '',
          shootType: '',
          otherShootExplaination: '',
          contactViaTextMessage: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // TODO: Save and submit data
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

            <div className="field">
              <CustomTextField placeholder="Phone" name="phonenumber" />
            </div>
            <div className="field">
              <CustomTextField placeholder="Email" name="email" />
            </div>

            <div>
              <CheckboxWithLabel
                name="contactViaTextMessage"
                type="checkbox"
                label="Contact Via Text Message"
              />
            </div>

            <div className="field">
              <FormControl>
                <FormLabel>What Type of Shoot do You Need?</FormLabel>
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

            <div className="field">
              <FormControl>
                <FormLabel>How did you hear about me?</FormLabel>
                <Field name="referral" type="input" as="select">
                  <option value="" disabled>
                    Select option
                  </option>
                  <option value="Google">Google </option>
                  <option value="Instagram">Instagram</option>
                  <option value="From a friend">From a friend</option>
                  <option value="Other">Other</option>
                </Field>
              </FormControl>
            </div>

            <div className="field">
              <CustomTextField
                placeholder="Write a message"
                name="message"
                fullWidth
                multiline
                rows={6}
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
          </Form>
        )}
      </Formik>
    </StyleWrapper>
  );
};

export default ContactForm;
