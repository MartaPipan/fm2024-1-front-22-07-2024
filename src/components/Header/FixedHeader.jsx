import React from 'react';
import styles from './Header.module.sass';

const FixedHeader = () => (
  <div className={styles.fixedHeader}>
    <span className={styles.info}>
      Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.
    </span>
    <a href="http://www.google.com">Read Announcement</a>
  </div>
);

export default FixedHeader;
