/* eslint-disable react/button-has-type */

import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const Button = ({ children, type, onClick, submit }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames({
      [classes.btn]: true,
      [classes.submit]: submit,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  submit: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  submit: false,
};

export default Button;
