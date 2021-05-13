import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import classes from './Input.module.scss';

function Input({ onChange, type, placeholder, task, value }) {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={classNames({
        [classes.input]: true,
        [classes.task]: task,
      })}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  task: PropTypes.bool,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  type: 'text',
  task: false,
};

export default Input;
