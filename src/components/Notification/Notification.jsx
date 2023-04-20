import React from 'react';
import PropTypes from 'prop-types';
import './Notification.styled';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
