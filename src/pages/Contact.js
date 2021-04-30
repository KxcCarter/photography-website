import React from 'react';
import Hero from '../components/Hero/Hero';
import contact3 from '../images/contact3.jpg';

// Components
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <>
      <Hero image={contact3} title="Contact Me" />
      {/* Something about ContactForm prevents the Hero animation on both About and Contact */}
      <ContactForm />
    </>
  );
};

export default Contact;
