import classNames from 'classnames';
import { arrayOf, bool, shape, string } from 'prop-types';

import classes from './Select.module.scss';

const Select = ({ options, name, id, className, filter }) => {
  const renderOptions = () =>
    options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ));

  return (
    <select
      className={classNames({
        [classes.filter_select]: filter,
        [className]: className,
      })}
      name={name}
      id={id}
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
  filter: bool,
};

Select.defaultProps = {
  className: null,
  filter: false,
};

export default Select;
