import React, { useEffect } from 'react';
import styles from './PageLayout.module.css';

const PageLayout: React.FC<{ leftComponent: React.ReactNode; rightComponenet: React.ReactNode }> = ({
  leftComponent,
  rightComponenet,
}) => {
  return (
    <div className={styles['body-container']}>
      <div className={styles['left-container']}>
        <div className={styles['white-container']}>{leftComponent}</div>
      </div>
      <div className={styles['right-container']}>
        <div className={styles['white-container']}>{rightComponenet}</div>
      </div>
    </div>
  );
};

export default PageLayout;