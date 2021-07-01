import { useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCheck,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import Button from 'components/UI/Button/Button';
import Loader from 'components/UI/Loader/Loader';
import Input from 'components/UI/Input/Input';
import Textarea from 'components/UI/Textarea/Textarea';

import { completeTodo, deleteTodo, editTodo, fetchTodoById } from 'api/api';

import classes from './TodoPage.module.scss';

const TodoPage = () => {
  const location = useLocation();
  const { id } = location.state;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [value, setValue] = useState('');
  const [body, setBody] = useState('');

  const fetchCurrentTodo = useCallback(async () => {
    setLoading(true);
    const newTodo = await fetchTodoById(id);
    setCurrentTodo(newTodo);
    setLoading(false);
    setValue(newTodo.text);
    setBody(newTodo.body);
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

  const submitNewTodo = async (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }

    setLoading(true);

    const newTodo = {
      text: value,
      body,
    };

    await editTodo(id, newTodo);
    await fetchCurrentTodo();
    setLoading(false);
    if (setEditMode) {
      setEditMode(false);
    }
  };

  const editTodoHandler = () => setEditMode(!editMode);

  return (
    <div className={classes.todopage}>
      <Loader loading={loading} />
      {editMode ? (
        <form onSubmit={submitNewTodo}>
          <Input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            name="todo_input"
            placeholder="Enter task here!"
            className={classes.task_input}
          />
          <Button type="submit" className={classes.btn_submit}>
            Edit Task
          </Button>
          <Textarea
            onChange={(e) => setBody(e.target.value)}
            value={body}
            name="body_edit"
            placeholder="Enter description here!"
            className={classes.task_textarea}
          />
        </form>
      ) : (
        <div>
          <div className={classes.task_wrapper}>
            <h2>{currentTodo.text}</h2>
            <Button className={classes.btn_handlers} rounded>
              <Link to="/">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </Button>
          </div>
          <div className={classes.task_body}>
            <p>{currentTodo.body}</p>
          </div>
        </div>
      )}
      <div className={classes.button_wrapper}>
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
        <Button
          className={classes.btn_handlers}
          onClick={editTodoHandler}
          rounded
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </div>
    </div>
  );
};

export default TodoPage;
