import { PropTypes } from 'prop-types';
import { useState } from 'react';
import Button from '../Button/Button';

import Input from '../Input/Input';

import styles from './TodoForm.module.scss';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='Enter task here!'
        task_input
      />
      <Button type="submit" submit onClick={handleSubmit}>
        Add Task
      </Button>
    </form>
  );
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
