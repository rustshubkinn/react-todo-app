/* eslint-disable react/button-has-type */

import classNames from 'classnames';
import { func, string } from 'prop-types';

import classes from './Button.module.scss';

const Button = ({ children, type, onClick, className }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames({
      [classes.btn]: true,
      [className]: className,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: string.isRequired,
  type: string,
  onClick: func.isRequired,
  className: string,
};

Button.defaultProps = {
  type: 'button',
  className: null,
};

export default Button;
