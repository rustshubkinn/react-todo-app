import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';

import classes from './TodoForm.module.scss';

const TodoForm = ({ setTodos }) => {
  const [value, setValue] = useState('');

  const addTodo = (todo) => setTodos((prevState) => [...prevState, todo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    const newTodo = {
      text: value,
      isCompleted: false,
      id: Math.random(),
    };

    addTodo(newTodo);
    setValue('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter task here!"
        todoInput
        main
      />
      <Button type="submit" submit onClick={handleSubmit}>
        Add Task
      </Button>
    </form>
  );
};

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

export default TodoForm;
