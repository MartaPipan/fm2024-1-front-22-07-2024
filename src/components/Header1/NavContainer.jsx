import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Header1.module.sass';
import CONSTANTS from '../../constants';
import Logo from './Logo';

const NavContainer = () => {
  const { data } = useSelector((state) => state.userStore);
  const navigate = useNavigate();

  const startContests = () => {
    navigate('/startContest');
  };

  return (
    <div className={styles.navContainer}>
      <Logo
        src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
        className={styles.logo}
        alt="blue_logo"
      />
      <div className={styles.leftNav}>
        <div className={styles.nav}>
          <ul>
            <li>
              <span>NAME IDEAS</span>
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                alt="menu"
              />
              <ul>
                <li><a href="http://www.google.com">Beauty</a></li>
                <li><a href="http://www.google.com">Consulting</a></li>
                <li><a href="http://www.google.com">E-Commerce</a></li>
                <li><a href="http://www.google.com">Fashion & Clothing</a></li>
                <li><a href="http://www.google.com">Finance</a></li>
                <li><a href="http://www.google.com">Real Estate</a></li>
                <li><a href="http://www.google.com">Tech</a></li>
                <li className={styles.last}><a href="http://www.google.com">More Categories</a></li>
              </ul>
            </li>
            <li>
              <span>CONTESTS</span>
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                alt="menu"
              />
              <ul>
                <li><a href="http://www.google.com">HOW IT WORKS</a></li>
                <li><a href="http://www.google.com">PRICING</a></li>
                <li><a href="http://www.google.com">AGENCY SERVICE</a></li>
                <li><a href="http://www.google.com">ACTIVE CONTESTS</a></li>
                <li><a href="http://www.google.com">WINNERS</a></li>
                <li><a href="http://www.google.com">LEADERBOARD</a></li>
                <li className={styles.last}><a href="http://www.google.com">BECOME A CREATIVE</a></li>
              </ul>
            </li>
            <li>
              <span>Our Work</span>
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                alt="menu"
              />
              <ul>
                <li><a href="http://www.google.com">NAMES</a></li>
                <li><a href="http://www.google.com">TAGLINES</a></li>
                <li><a href="http://www.google.com">LOGOS</a></li>
                <li className={styles.last}><a href="http://www.google.com">TESTIMONIALS</a></li>
              </ul>
            </li>
            <li>
              <span>Names For Sale</span>
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                alt="menu"
              />
              <ul>
                <li><a href="http://www.google.com">POPULAR NAMES</a></li>
                <li><a href="http://www.google.com">SHORT NAMES</a></li>
                <li><a href="http://www.google.com">INTRIGUING NAMES</a></li>
                <li><a href="http://www.google.com">NAMES BY CATEGORY</a></li>
                <li><a href="http://www.google.com">VISUAL NAME SEARCH</a></li>
                <li className={styles.last}><a href="http://www.google.com">SELL YOUR DOMAINS</a></li>
              </ul>
            </li>
            <li>
              <span>Blog</span>
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                alt="menu"
              />
              <ul>
                <li><a href="http://www.google.com">ULTIMATE NAMING GUIDE</a></li>
                <li><a href="http://www.google.com">POETIC DEVICES IN BUSINESS NAMING</a></li>
                <li><a href="http://www.google.com">CROWDED BAR THEORY</a></li>
                <li className={styles.last}><a href="http://www.google.com">ALL ARTICLES</a></li>
              </ul>
            </li>
          </ul>
        </div>
        {data && data.role !== CONSTANTS.CREATOR && (
          <div className={styles.startContestBtn} onClick={startContests}>
            START CONTEST
          </div>
        )}
      </div>
    </div>
  );
};

export default NavContainer;
