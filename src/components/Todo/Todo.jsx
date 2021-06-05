import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import TodoForm from '../TodoForm/TodoForm';

import { fetchTodo, deleteTodo, completeTodo } from '../../api/api';

import classes from './Todo.module.scss';

const Todo = ({ text, id, isCompleted, setTodos }) => {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const completeTodoHandler = async () => {
    setLoading(true);
    await completeTodo(id, isCompleted);
    const newTodos = await fetchTodo();
    setTodos(newTodos);
    setLoading(false);
  };

  const deleteTodoHandler = async () => {
    setLoading(true);
    await deleteTodo(id);
    const newTodos = await fetchTodo();
    setLoading(false);
    setTodos(newTodos);
  };

  const editTodoHandler = () => setEditMode(!editMode);

  return (
    <div>
      <Loader loading={loading} />
      {editMode ? (
        <TodoForm
          id={id}
          todoText={text}
          setTodos={setTodos}
          setEditMode={setEditMode}
        />
      ) : (
        <div
          className={classNames({
            [classes.todo]: true,
            [classes.completed]: isCompleted,
          })}
        >
          <p>{text}</p>
          <div>
            <Button type="button" onClick={completeTodoHandler}>
              Complete
            </Button>
            <Button type="button" onClick={deleteTodoHandler}>
              Delete
            </Button>
            <Button type="button" onClick={editTodoHandler}>
              Edit
            </Button>
          </div>
        </div>
      )}
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
