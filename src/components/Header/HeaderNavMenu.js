import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './HeaderNavMenu.styles';
const PAGES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
  { path: '/portfolio', name: 'portfolio' },
  { path: '/blog', name: 'blog' },
];

const HeaderNavMenu = () => {
  const [cssRule, setCssRule] = useState('');

  useEffect(() => {
    animate();
  });

  const animate = () => {
    setCssRule('animate');
  };

  // Animation is currently disabled for the header.

  return (
    <Wrapper>
      <div className="outer-wrapper">
        <h1 className={cssRule}>Hursh Photos</h1>
        {PAGES.map((item, index) => (
          <h4 key={index}>
            <Link to={item.path}>{item.name}</Link>
          </h4>
        ))}
      </div>
    </Wrapper>
  );
};

export default HeaderNavMenu;
