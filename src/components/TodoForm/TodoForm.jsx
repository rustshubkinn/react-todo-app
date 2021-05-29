import { useState } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';
import { postTodo } from '../../api/api';

import classes from './TodoForm.module.scss';

const TodoForm = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!value) return;

    const newTodo = {
      id: Math.random(),
      isCompleted: false,
      text: value,
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

export default TodoForm;
