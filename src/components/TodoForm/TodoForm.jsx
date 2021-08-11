import { useState } from 'react';
import { string, func } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import Loader from 'components/UI/Loader/Loader';

import { addTodo, editTodoById } from 'redux/actions';

import classes from './TodoForm.module.scss';

const TodoForm = ({ id, todoText, setEditMode }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);
  const [value, setValue] = useState(todoText);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      dispatch(editTodoById(id, value));
      setEditMode(false);
      setValue('');
    } else {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  const handleChange = (e) => setValue(e.target.value);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Loader loading={loading} />
      <Input
        onChange={handleChange}
        value={value}
        name="todo_input"
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
