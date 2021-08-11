import { useState } from 'react';
import { bool, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/UI/Button/Button';
import Loader from 'components/UI/Loader/Loader';
import TodoForm from 'components/TodoForm/TodoForm';

import { completeTodoById, deleteTodoById } from 'redux/actions';

import classes from './Todo.module.scss';

const Todo = ({ text, id, isCompleted, className }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);
  const [editMode, setEditMode] = useState(false);

  const completeTodoHandler = async () =>
    dispatch(completeTodoById(id, isCompleted));

  const deleteTodoHandler = async () => dispatch(deleteTodoById(id));

  const editTodoHandler = () => setEditMode(!editMode);

  return (
    <div>
      <Loader loading={loading} />
      {editMode ? (
        <TodoForm id={id} todoText={text} setEditMode={setEditMode} />
      ) : (
        <div
          className={classNames({
            [classes.todo]: true,
            [classes.completed]: isCompleted,
            [className]: className,
          })}
        >
          <p>{text}</p>
          <div className={classes.btn_wrapper}>
            <Button>
              <Link
                to={{
                  pathname: `/todos/${id}`,
                  state: { id },
                }}
              >
                Open
              </Link>
            </Button>
            <Button
              className={classes.btn_handlers}
              onClick={editTodoHandler}
              rounded
            >
              <FontAwesomeIcon icon={faEdit} />
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

Todo.propTypes = {
  text: string.isRequired,
  isCompleted: bool.isRequired,
  id: string.isRequired,
  className: string,
};

Todo.defaultProps = {
  className: null,
};

export default Todo;
