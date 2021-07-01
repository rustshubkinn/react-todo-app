import { func, string } from 'prop-types';
import classNames from 'classnames';

import classes from './Textarea.module.scss';

const Textarea = ({ name, onChange, type, placeholder, className, value }) => (
  <textarea
    value={value}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className={classNames(classes.input, className)}
  />
);

Textarea.propTypes = {
  onChange: func.isRequired,
  type: string,
  placeholder: string.isRequired,
  value: string,
  name: string.isRequired,
  className: string,
};

Textarea.defaultProps = {
  value: '',
  type: 'text',
  className: null,
};

export default Textarea;
