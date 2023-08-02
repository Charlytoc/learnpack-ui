import PropTypes from 'prop-types';
import { SectionContainerBase } from './SectionContainerStyles';

const SectionContainer = ({ children, ...rest }) => {
  return <SectionContainerBase {...rest}>{children}</SectionContainerBase>;
};

SectionContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  rest: PropTypes.element,
};

SectionContainer.defaultProps = {};

export default SectionContainer;
