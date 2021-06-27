/* eslint-disable react/button-has-type */

import classNames from 'classnames';
import { bool, element, func, oneOfType, string } from 'prop-types';

import classes from './Button.module.scss';

const Button = ({ children, type, onClick, className, rounded }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames({
      [classes.btn]: true,
      [classes.rounded]: rounded,
      [className]: className,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: oneOfType([string, element]),
  type: string,
  onClick: func,
  className: string,
  rounded: bool,
};

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: null,
  className: null,
  rounded: null,
};

export default Button;
