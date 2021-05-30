import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Loader from '../Loader/Loader';

import styles from './Todo.module.scss';
import { fetchTodo, deleteTodo } from '../../api/api';

const Todo = ({ text, id, isCompleted, setTodos }) => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(isCompleted);

  const completeTodo = () => setCompleted(!completed);

  const deleteTodoHandler = async () => {
    setLoading(true);
    await deleteTodo(id);
    const newTodos = await fetchTodo();
    setTodos(newTodos);
    setLoading(false);
  };

  return (
    <div
      className={classNames({
        [styles.todo]: true,
        [styles.completed]: completed,
      })}
    >
      {loading && <Loader />}
      {text}
      <div>
        <Button type="button" onClick={completeTodo}>
          Complete
        </Button>
        <Button type="button" onClick={deleteTodoHandler}>
          Delete
        </Button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Todo;
