import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

import {
  completeTodoById,
  deleteTodoById,
  openTodo,
  editOpenedTodo,
} from 'redux/actions';

import classes from './TodoPage.module.scss';

const TodoPage = () => {
  const location = useLocation();
  const { id } = location.state;
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, currentTodo } = useSelector((state) => state);
  const [formValues, setFormValues] = useState({ text: '', body: '' });

  useEffect(() => {
    setFormValues(currentTodo);
  }, [currentTodo]);

  useEffect(() => {
    dispatch(openTodo(id));
  }, [dispatch, id]);

  const completeTodoHandler = async () =>
    dispatch(completeTodoById(id, currentTodo.isCompleted));

  const deleteTodoHandler = async () => {
    dispatch(deleteTodoById(id));
    history.push('/');
  };

  const submitNewTodo = async (e) => {
    if (e.shiftKey === true || e.keyCode !== 13) {
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      await dispatch(editOpenedTodo(id, formValues));
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
