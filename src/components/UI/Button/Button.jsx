/* eslint-disable react/button-has-type */

import classNames from 'classnames';
import { bool, func, string } from 'prop-types';

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
  children: string.isRequired,
  type: string,
  onClick: func.isRequired,
  submit: bool,
};

Button.defaultProps = {
  type: 'button',
  submit: false,
};

export default Button;
