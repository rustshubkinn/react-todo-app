import { useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCheck,
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
  const [currentTodo, setCurrentTodo] = useState({});
  const [formValues, setFormValues] = useState({ text: '', body: '' });

  const fetchCurrentTodo = useCallback(async () => {
    setLoading(true);
    const newTodo = await fetchTodoById(id);
    setCurrentTodo(newTodo);
    setFormValues(newTodo);
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

  const submitNewTodo = async (e) => {
    if (e.shiftKey === true || e.keyCode !== 13) {
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();

      setLoading(true);

      const newTodo = { text: formValues.text, body: formValues.body };

      await editTodo(id, newTodo);
      await fetchCurrentTodo();
      setLoading(false);
    }
  };

  const changeHandler = ({ target }) =>
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));

  return (
    <section className={classes.todo}>
      <Loader loading={loading} />
      <form
        onSubmit={submitNewTodo}
        onKeyDown={submitNewTodo}
        role="presentation"
      >
        <header className={classes.todo_header}>
          <Input
            onChange={changeHandler}
            value={formValues.text}
            name="text"
            placeholder="Enter task here!"
          />
          <Button rounded>
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </Button>
        </header>
        <Textarea
          onChange={changeHandler}
          value={formValues.body}
          name="body"
          placeholder="Enter description here!"
        />
        <footer className={classes.todo_footer}>
          <Button onClick={completeTodoHandler} rounded>
            <FontAwesomeIcon icon={faCheck} />
          </Button>
          <Button
            className={classes.btn_delete}
            onClick={deleteTodoHandler}
            rounded
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </footer>
      </form>
    </section>
  );
};

export default TodoPage;
