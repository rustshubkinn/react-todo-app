/* eslint-disable react/button-has-type */

import classNames from 'classnames';
import { bool, func, string } from 'prop-types';

import classes from './Button.module.scss';

const Button = ({ children, type, onClick, className, remove, check }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames({
      [classes.btn]: true,
      [classes.remove]: remove,
      [classes.check]: check,
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
  remove: bool,
  check: bool,
};

Button.defaultProps = {
  children: null,
  type: 'button',
  className: null,
  remove: null,
  check: null,
};

export default Button;
