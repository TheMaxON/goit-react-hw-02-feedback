import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.styled';
import { OptionsBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = Object.keys(options);

  return (
    <div className="options">
      {optionKeys.map(option => (
        <OptionsBtn
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionsBtn>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
