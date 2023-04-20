import { SectionStyle } from './Section.styled';
import { SectionTitle } from './Section.styled';
import { PropTypes } from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
