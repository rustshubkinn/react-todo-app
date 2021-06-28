import classNames from 'classnames';
import { arrayOf, func, shape, string } from 'prop-types';

import classes from './Select.module.scss';

const Select = ({ options, name, id, className, onChange }) => {
  const renderOptions = () =>
    options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ));

  return (
    <select
      className={classNames(classes.filter_select, className)}
      name={name}
      id={id}
      onChange={onChange}
    >
      {renderOptions()}
    </select>
  );
};

Select.propTypes = {
  options: arrayOf(shape({})).isRequired,
  id: string.isRequired,
  name: string.isRequired,
  className: string,
  onChange: func.isRequired,
};

Select.defaultProps = {
  className: null,
};

export default Select;
