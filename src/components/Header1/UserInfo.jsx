import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header1.module.sass';
import CONSTANTS from '../../constants';

const UserInfo = ({ data, logOut }) => (
  <>
    <div className={styles.userInfo}>
      <img
        src={
          data.avatar === 'anon.png'
            ? CONSTANTS.ANONYM_IMAGE_PATH
            : `${CONSTANTS.publicURL}${data.avatar}`
        }
        alt="user"
      />
      <span>{`Hi, ${data.displayName}`}</span>
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
        alt="menu"
      />
      <ul>
        <li>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <span>View Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/account" style={{ textDecoration: 'none' }}>
            <span>My Account</span>
          </Link>
        </li>
        <li>
          <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}>
            <span>Messages</span>
          </Link>
        </li>
        <li>
          <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}>
            <span>Affiliate Dashboard</span>
          </Link>
        </li>
        <li>
          <span onClick={logOut}>Logout</span>
        </li>
      </ul>
    </div>
    <img
      src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
      className={styles.emailIcon}
      alt="email"
    />
  </>
);

export default UserInfo;
