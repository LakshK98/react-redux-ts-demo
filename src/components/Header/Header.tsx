import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/stackline_logo.svg" alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
