import React from 'react';
import contact3 from '../images/contact3.jpg';
import Hero from '../components/Hero/Hero';

// Components
import ContactForm from '../components/ContactForm/ContactForm';
import ContactPageInfo from '../components/ContactPageInfo/ContactPageInfo';

const Contact: React.FC = () => {
  return (
    <>
      <Hero image={contact3} title="Contact Me" />
      <ContactPageInfo />
      <ContactForm />
    </>
  );
};

export default Contact;
