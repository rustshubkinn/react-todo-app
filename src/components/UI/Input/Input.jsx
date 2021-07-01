import { func, string } from 'prop-types';
import classNames from 'classnames';

import classes from './Input.module.scss';

const Input = ({ name, onChange, type, placeholder, className, value }) => (
  <input
    value={value}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className={classNames(classes.input, className)}
  />
);

Input.propTypes = {
  onChange: func.isRequired,
  type: string,
  placeholder: string.isRequired,
  value: string,
  name: string.isRequired,
  className: string,
};

Input.defaultProps = {
  value: '',
  type: 'text',
  className: null,
};

export default Input;
