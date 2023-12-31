import PropTypes from 'prop-types';
import { PageContainerBase } from './PageContainerStyles';

const PageContainer = ({ children, ...rest }) => {
  return <PageContainerBase {...rest}>{children}</PageContainerBase>;
};

PageContainer.propTypes = {
  children: PropTypes.array,
  rest: PropTypes.element,
};

PageContainer.defaultProps = {};

export default PageContainer;
