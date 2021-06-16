/* eslint-disable react/button-has-type */

import classNames from 'classnames';
import { bool, func, string } from 'prop-types';

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
  children: string,
  type: string,
  onClick: func.isRequired,
  className: string,
  rounded: bool,
};

Button.defaultProps = {
  children: null,
  type: 'button',
  className: null,
  rounded: null,
};

export default Button;
