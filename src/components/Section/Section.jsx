import React, { Component } from 'react';
import { SectionStyle } from './Section.styled';
import { PropTypes } from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <h1>{title}</h1>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
