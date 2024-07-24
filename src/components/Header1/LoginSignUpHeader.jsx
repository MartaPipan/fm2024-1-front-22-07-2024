import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import styles from './Header1.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore } from '../../store/slices/userSlice';

const LoginSignUpHeader = () => {
  const { data, isFetching } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    dispatch(clearUserStore());
    navigate('/login', { replace: true });
  };

  if (isFetching) {
    return null;
  }

  return (
    <div className={styles.loginSignnUpHeaders}>
      <a
        href={`tel:+03${CONSTANTS.CONTACT.PHONE}`}
        className={styles.numberContainer}
      >
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
        <span>{CONSTANTS.CONTACT.PHONE}</span>
      </a>
      <div className={styles.userButtonsContainer}>
        {data ? <UserInfo data={data} logOut={logOut} /> : (
          <>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span className={styles.btn}>LOGIN</span>
            </Link>
            <Link to="/registration" style={{ textDecoration: 'none' }}>
              <span className={styles.btn}>SIGN UP</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignUpHeader;
