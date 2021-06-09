import { useState } from 'react';
import { func, string } from 'prop-types';

import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import Loader from 'components/UI/Loader/Loader';

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
        className={classes.main_input}
      />
      <Button type="submit" className={classes.btn_submit}>
        {id ? 'Edit Task' : 'Add Task'}
      </Button>
    </form>
  );
};

TodoForm.propTypes = {
  setTodos: func.isRequired,
  id: string,
  todoText: string,
  setEditMode: func,
};

TodoForm.defaultProps = {
  id: '',
  todoText: '',
  setEditMode: null,
};

export default TodoForm;
