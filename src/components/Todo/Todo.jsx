import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Loader from '../Loader/Loader';

import classes from './Todo.module.scss';

import {
  fetchTodo,
  deleteTodo,
  completeTodo,
  uncompleteTodo,
  editTodo,
} from '../../api/api';
import Input from '../Input/Input';

const Todo = ({ text, id, isCompleted, setTodos }) => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(isCompleted);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');

  const completeToggler = () =>
    completed ? uncompleteTodo(id) : completeTodo(id);

  const completeTodoHandler = async () => {
    setLoading(true);
    setCompleted(!completed);
    completeToggler();
    fetchTodo();
    setLoading(false);
  };

  const deleteTodoHandler = async () => {
    setLoading(true);
    await deleteTodo(id);
    const newTodos = await fetchTodo();
    setTodos(newTodos);
    setLoading(false);
  };

  const editTodoHandler = async () => {
    setValue(text);
    setEditing(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!value) return;

    const editedTodo = {
      text: value,
    };

    await editTodo(id, editedTodo);
    const todos = await fetchTodo();

    setTodos(todos);
    setEditing(false);
    setLoading(false);
  };

  return (
    <div>
      {loading && <Loader />}
      {editing ? (
        <form className={classes.editform} onSubmit={handleEdit}>
          <Input
            value={value}
            placeholder="Edit task"
            todoInput
            main
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="submit" submit onClick={handleEdit}>
            Edit Task
          </Button>
        </form>
      ) : (
        <div
          className={classNames({
            [classes.todo]: true,
            [classes.completed]: completed,
          })}
        >
          {text}
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
