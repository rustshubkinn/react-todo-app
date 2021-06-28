import { arrayOf, element, func, oneOfType, string } from 'prop-types';
import classNames from 'classnames';

import Button from '../Button/Button';

import classes from './FilterBlock.module.scss';

const FilterBlock = ({ children, onSubmit, className }) => {
  const renderFilters = () => {
    if (!children.length) {
      return <li>{children}</li>;
    }

    return children.map((filter) => <li key={Math.random()}>{filter}</li>);
  };

  return (
    <section className={classNames(classes.filter_block, className)}>
      <form onSubmit={onSubmit}>
        <ul className={classes.fb_list}>{renderFilters()}</ul>
        <Button type="submit">Search</Button>
      </form>
    </section>
  );
};

FilterBlock.propTypes = {
  children: oneOfType([arrayOf(element), element]).isRequired,
  onSubmit: func.isRequired,
  className: string,
};

FilterBlock.defaultProps = {
  className: null,
};

export default FilterBlock;
