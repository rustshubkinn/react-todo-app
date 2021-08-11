import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/UI/Loader/Loader';
import TodoForm from 'components/TodoForm/TodoForm';
import TodoList from 'components/TodoList/TodoList';
import FilterBlock from 'components/UI/FilterBlock/FilterBlock';
import Select from 'components/UI/Select/Select';

import { fetchTodos, filterTodos } from 'redux/actions';

import classes from './Home.module.scss';

const MOCK_OPTIONS = [
  {
    value: '',
    name: 'All Todos',
  },
  {
    value: '0',
    name: 'Undone Todos',
  },
  {
    value: '1',
    name: 'Done Todos',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state);
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleChange = (e) => setValue(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(filterTodos(value));
  };

  return (
    <div className={classes.wrapper}>
      <Loader loading={loading} />
      <FilterBlock
        block
        className={classes.filter_block}
        onSubmit={onSubmitHandler}
      >
        <Select
          name="select_filter"
          id="select_filter"
          options={MOCK_OPTIONS}
          className={classes.select_filter}
          onChange={handleChange}
          value={value}
          filter
        />
      </FilterBlock>
      <div className={classes.todo_list_wrapper}>
        <TodoForm setTodos={() => {}} />
        <TodoList todos={todos} setTodos={() => {}} />
      </div>
    </div>
  );
};

export default Home;
