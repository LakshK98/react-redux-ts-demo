import React from 'react';
import styles from './Header.module.css';
import logo from '../../stackline_logo.svg';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
