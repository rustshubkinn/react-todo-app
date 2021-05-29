import { useState } from 'react';
import { PropTypes } from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';
import { postTodo, fetchTodo } from '../../api/api';

import classes from './TodoForm.module.scss';

const TodoForm = ({ setTodos }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!value) return;

    const newTodo = {
      isCompleted: false,
      text: value,
    };

    await postTodo(newTodo);
    const todos = await fetchTodo();
    setTodos(todos);
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
