import { useEffect, useState } from 'react';

import Loader from 'components/UI/Loader/Loader';
import TodoForm from 'components/TodoForm/TodoForm';
import TodoList from 'components/TodoList/TodoList';
import FilterBlock from 'components/UI/FilterBlock/FilterBlock';
import Select from 'components/UI/Select/Select';

import { fetchTodo } from 'api/api';

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
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const fetchData = async () => {
    setLoading(true);
    const todoList = await fetchTodo();
    setTodos(todoList);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => setValue(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!value) {
      await fetchData();
      return;
    }

    const newTodos = await fetchTodo();
    const parsed = Boolean(parseInt(value, 10));

    if (parsed === true) {
      const filterTodo = newTodos.filter((todo) => todo.isCompleted);
      setTodos(filterTodo);
    } else {
      const filterTodo = newTodos.filter((todo) => !todo.isCompleted);
      setTodos(filterTodo);
    }
    setLoading(false);
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
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Home;
