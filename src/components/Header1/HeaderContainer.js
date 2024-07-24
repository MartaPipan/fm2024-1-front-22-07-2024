import React from 'react';
import FixedHeader from './FixedHeader';
import LoginSignUpHeader from './LoginSignUpHeader';
import NavContainer from './NavContainer';
import styles from './Header1.module.sass';

const HeaderContainer = () => {
  return (
    <div className={styles.headerContainer}>
      <FixedHeader />
      <LoginSignUpHeader />
      <NavContainer />
    </div>
  );
};

export default HeaderContainer;
