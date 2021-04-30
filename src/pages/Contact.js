import React from 'react';
import Hero from '../components/Hero/Hero';
import contact3 from '../images/contact3.jpg';

// Components
import ContactForm from '../components/ContactForm/ContactForm';
import ContactPageInfo from '../components/ContactPageInfo/ContactPageInfo';

const Contact = () => {
  return (
    <>
      <Hero image={contact3} title="Contact Me" />
      <ContactPageInfo />
      <ContactForm />
    </>
  );
};

export default Contact;
