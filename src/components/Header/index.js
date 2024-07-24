import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/slices/userSlice';
import HeaderContainer from './HeaderContainer';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return <HeaderContainer />;
};

export default Header;
