import PropTypes from 'prop-types';
import { SliceContainerBase } from './SliceContainerStyles';

const SliceContainer = ({ children, ...rest }) => (
  <SliceContainerBase {...rest}>{children}</SliceContainerBase>
);

SliceContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

SliceContainer.defaultProps = {};

export default SliceContainer;
