import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Input.module.scss';

const Input = ({ onChange, type, placeholder, main, value }) => (
  <input
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className={classNames({
      [classes.input]: true,
      [classes.main]: main,
    })}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  main: PropTypes.bool,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  type: 'text',
  main: false,
};

export default Input;
