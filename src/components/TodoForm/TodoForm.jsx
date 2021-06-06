import { useState } from 'react';
import { PropTypes } from 'prop-types';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Loader from 'components/Loader/Loader';

import { postTodo, fetchTodo, editTodo } from 'api/api';

import classes from './TodoForm.module.scss';

const TodoForm = ({ id, todoText, setTodos, setEditMode }) => {
  const [value, setValue] = useState(todoText);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    setLoading(true);

    const newTodo = {
      isCompleted: false,
      text: value,
    };

    if (id) {
      await editTodo(id, newTodo);
    } else {
      await postTodo(newTodo);
    }

    const todos = await fetchTodo();
    setTodos(todos);
    setValue('');
    setLoading(false);
    if (setEditMode) {
      setEditMode(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Loader loading={loading} />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter task here!"
        todoInput
        main
      />
      <Button type="submit" submit onClick={handleSubmit}>
        {id ? 'Edit Task' : 'Add Task'}
      </Button>
    </form>
  );
};

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
  id: PropTypes.string,
  todoText: PropTypes.string,
  setEditMode: PropTypes.func,
};

TodoForm.defaultProps = {
  id: '',
  todoText: '',
  setEditMode: null,
};

export default TodoForm;
