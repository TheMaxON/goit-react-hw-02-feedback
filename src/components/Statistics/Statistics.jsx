import PropTypes from 'prop-types';
import { Stats } from './Statistics.styled';
import { StatNumber } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Stats>
      <StatNumber>Good: {good}</StatNumber>
      <StatNumber>Neutral: {neutral}</StatNumber>
      <StatNumber>Bad: {bad}</StatNumber>
      <StatNumber>Total: {total}</StatNumber>
      <StatNumber>Positive: {positivePercentage || 0}%</StatNumber>
    </Stats>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
