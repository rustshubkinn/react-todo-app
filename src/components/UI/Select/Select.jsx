import { arrayOf, shape, string } from 'prop-types';

import classes from './Select.module.scss';

const Select = ({ options, name, id }) => {
  const renderOptions = () =>
    options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ));

  return (
    <select className={classes.filter_select} name={name} id={id}>
      {renderOptions()}
    </select>
  );
};

Select.propTypes = {
  options: arrayOf(shape({})).isRequired,
  id: string.isRequired,
  name: string.isRequired,
};

export default Select;
