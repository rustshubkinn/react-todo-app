import { useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/UI/Button/Button';
import Loader from 'components/UI/Loader/Loader';
import TodoForm from 'components/TodoForm/TodoForm';

import { completeTodo, deleteTodo, fetchTodoById } from 'api/api';

import classes from './TodoPage.module.scss';

const TodoPage = () => {
  const location = useLocation();
  const { id } = location.state;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const fetchCurrentTodo = useCallback(async () => {
    setLoading(true);
    const newTodo = await fetchTodoById(id);
    setCurrentTodo(newTodo);
    setLoading(false);
    return newTodo;
  }, [id]);

  useEffect(() => {
    fetchCurrentTodo();
  }, [fetchCurrentTodo]);

  const completeTodoHandler = async () => {
    setLoading(true);
    await completeTodo(id, currentTodo.isCompleted);
    await fetchCurrentTodo();
    setLoading(false);
  };

  const deleteTodoHandler = async () => {
    setLoading(true);
    await deleteTodo(id);
    setLoading(false);
    history.push('/');
  };

  const editTodoHandler = () => setEditMode(!editMode);

  return (
    <div className={classes.todopage}>
      <Loader loading={loading} />

      {editMode ? (
        <TodoForm
          id={id}
          todoText={currentTodo.text}
          setTodos={fetchCurrentTodo}
          setEditMode={setEditMode}
        />
      ) : (
        <div>
          <h2>Current Task is:</h2>
          <p>{currentTodo.text}</p>
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
              <FontAwesomeIcon icon={faCheck} />
            </Button>
            <Button
              className={classes.btn_handlers}
              onClick={deleteTodoHandler}
              rounded
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoPage;
