import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/UI/Button/Button';
import Loader from 'components/UI/Loader/Loader';
import TodoForm from 'components/TodoForm/TodoForm';

import { completeTodo, deleteTodo, fetchTodo } from 'api/api';

import classes from './TodoPage.module.scss';

const TodoPage = ({ setTodos }) => {
  const location = useLocation();
  const { id, text, isCompleted } = location.state;
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const fetchCurrentTodo = async () => {
    setLoading(true);
    const todoList = await fetchTodo();
    const exactTodo = todoList.find((currentTodo) => currentTodo.id === id);
    setLoading(false);
    return exactTodo;
  };

  const completeTodoHandler = async () => {
    setLoading(true);
    await completeTodo(id, isCompleted);
    await fetchCurrentTodo();
    setLoading(false);
  };

  const deleteTodoHandler = async () => {
    setLoading(true);
    await deleteTodo(id);
    const newTodos = await fetchTodo();
    setTodos(newTodos);
    setLoading(false);
  };

  const editTodoHandler = () => setEditMode(!editMode);

  return (
    <div className={classes.todopage}>
      <Loader loading={loading} />

      {editMode ? (
        <TodoForm
          id={id}
          todoText={text}
          setTodos={fetchCurrentTodo}
          setEditMode={setEditMode}
        />
      ) : (
        <div>
          <h2>Current Task is:</h2>
          <p>{text}</p>
          <div className={classes.button_wrapper}>
            <Button>
              <Link to="/">Back</Link>
            </Button>
            <Button className={classes.btn_handlers} onClick={editTodoHandler}>
              Edit Task
            </Button>
            <Button
              className={classes.btn_handlers}
              onClick={completeTodoHandler}
              rounded
            >
              <Link to="/" onClick={fetchTodo}>
                <FontAwesomeIcon icon={faCheck} />
              </Link>
            </Button>
            <Button
              className={classes.btn_handlers}
              onClick={deleteTodoHandler}
              rounded
            >
              <Link to="/">
                <FontAwesomeIcon icon={faTrash} />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

TodoPage.propTypes = {
  setTodos: func.isRequired,
};

export default TodoPage;
