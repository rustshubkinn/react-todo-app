import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import classes from './Input.module.scss';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line camelcase
function Input({ onChange, type, placeholder, task_input, value}) {
  return (
    <input
      value={value}
      type={type || 'text'}
      placeholder={placeholder}
      className={classNames({
        [classes.input]: true,
        [classes.task_input]: task_input
      })}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  task_input: PropTypes.bool,
  value: PropTypes.string
};

Input.defaultProps = {
  value: '',
  type: 'text',
  task_input: false
}

export default Input;
