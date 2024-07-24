import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.sass';

const Error = ({ status, data, clearError }) => {
  const getMessage = useCallback(() => {
    switch (status) {
      case 404:
        return data;
      case 400:
        return 'Check the input data';
      case 409:
        return data;
      case 403:
        return 'Bank decline transaction';
      case 406:
        return data;
      default:
        return 'Server Error';
    }
  }, [status, data]);

  return (
    <div className={styles.errorContainer}>
      <span>{getMessage()}</span>
      <i className='far fa-times-circle' onClick={clearError} />
    </div>
  );
};

Error.propTypes = {
  status: PropTypes.number.isRequired,
  data: PropTypes.string,
  clearError: PropTypes.func.isRequired,
};

export default Error;
