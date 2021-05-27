import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';

import classes from './TodoForm.module.scss';
import URL from '../URL/URL';

const TodoForm = ({ setTodos }) => {
  const [value, setValue] = useState('');

  const postTodo = async (newTodo) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newTodo }),
    };

    await fetch(URL, options).then(() => {
      setTodos((prevState) => [newTodo, ...prevState]);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    const newTodo = {
      text: value,
      isCompleted: false,
      id: Math.random(),
    };

    postTodo(newTodo);
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
