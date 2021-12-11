import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';
import { useTypedSelector } from '../../hooks/useTypesSelector';

const Header = () => {
  const { currentPage } = useTypedSelector((state) => state.page);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="visual-studio" />
        </Link>
      </div>
      <div className="menu">
        <Link className={currentPage === '/' ? 'active' : ''} to="/">
          Home
        </Link>
        <Link className={currentPage === '/about' ? 'active' : ''} to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
