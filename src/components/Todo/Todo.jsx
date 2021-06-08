import { useState } from 'react';
import classNames from 'classnames';
import { bool, func, string } from 'prop-types';

import Button from 'components/UI/Button/Button';
import Loader from 'components/UI/Loader/Loader';
import TodoForm from 'components/TodoForm/TodoForm';

import { fetchTodo, deleteTodo, completeTodo } from 'api/api';

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
            <Button
              classNames={classes.btn_check}
              onClick={completeTodoHandler}
            >
              Complete
            </Button>
            <Button
              className={classes.btn_handlers}
              onClick={deleteTodoHandler}
            >
              Delete
            </Button>
            <Button className={classes.btn_handlers} onClick={editTodoHandler}>
              Edit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

Todo.propTypes = {
  text: string.isRequired,
  isCompleted: bool.isRequired,
  id: string.isRequired,
  setTodos: func.isRequired,
};

export default Todo;
