import { bool, element, func, string } from 'prop-types';
import classNames from 'classnames';

import Button from '../Button/Button';

import classes from './FilterBlock.module.scss';

const FilterBlock = ({ children, onSubmit, className, block }) => {
  const renderFilters = () => {
    if (!children.length) {
      return <li>{children}</li>;
    }

    return children.map((filter) => <li>{filter}</li>);
  };

  return (
    <section
      className={classNames({
        [classes.filter_block]: block,
        [className]: className,
      })}
    >
      <form onSubmit={onSubmit}>
        <ul className={classes.filter_block_list}>{renderFilters()}</ul>
        <Button type="submit">Search</Button>
      </form>
    </section>
  );
};

FilterBlock.propTypes = {
  children: element.isRequired,
  onSubmit: func.isRequired,
  className: string,
  block: bool,
};

FilterBlock.defaultProps = {
  className: null,
  block: false,
};

export default FilterBlock;
