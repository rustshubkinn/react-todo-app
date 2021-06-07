import { func, string } from 'prop-types';
import classNames from 'classnames';

import classes from './Input.module.scss';

const Input = ({ onChange, type, placeholder, className, value }) => (
  <input
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className={classNames({
      [classes.input]: true,
      [className]: className,
    })}
  />
);

Input.propTypes = {
  onChange: func.isRequired,
  type: string,
  placeholder: string.isRequired,
  value: string,
  className: string,
};

Input.defaultProps = {
  value: '',
  type: 'text',
  className: null,
};

export default Input;
