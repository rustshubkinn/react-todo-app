import { PropTypes } from 'prop-types';
import { useState } from 'react';

import styles from './TodoForm.module.scss'

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className={styles.submit}
        onClick={handleSubmit}
        >Add Task</button>
    </form>
  );
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
