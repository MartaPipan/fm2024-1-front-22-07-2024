import React from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';

const Footer = () => {
  const topFooterItemsRender = item => (
    <div key={item.title}>
      <h4>{item.title}</h4>
      {item.items.map(i => (
        <a key={i} href='https://google.com'>
          {i}
        </a>
      ))}
    </div>
  );

  const topFooterRender =()=>{
    return CONSTANTS.FooterItems.map(item => topFooterItemsRender(item));
  }
  return (
     <footer className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <nav>{topFooterRender()}</nav>
        </div>
      </footer>
  );
}

export default Footer;
