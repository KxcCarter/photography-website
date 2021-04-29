import React from 'react';
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
  return (
    <Wrapper>
      <div className="outer-wrapper">
        <h1>H. Raymond Carter Photography</h1>
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
