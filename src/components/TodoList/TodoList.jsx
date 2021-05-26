import PropTypes from 'prop-types';

import Todo from '../Todo/Todo';

import classes from './TodoList.module.scss';

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const renderTodos = () =>
    todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        id={todo.id}
        isCompleted={todo.isCompleted}
        deleteTodo={deleteTodo}
      />
    ));

  return <div className={classes.todo_list}>{renderTodos()}</div>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoList;
