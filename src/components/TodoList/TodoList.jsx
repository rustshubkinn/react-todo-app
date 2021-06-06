import PropTypes, { arrayOf, func } from 'prop-types';

import Todo from 'components/Todo/Todo';

import classes from './TodoList.module.scss';

const TodoList = ({ todos, setTodos }) => {
  const renderTodos = () =>
    todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        id={todo.id}
        isCompleted={todo.isCompleted}
        setTodos={setTodos}
      />
    ));

  return <div className={classes.todo_list}>{renderTodos()}</div>;
};

TodoList.propTypes = {
  todos: arrayOf(PropTypes.any).isRequired,
  setTodos: func.isRequired,
};

export default TodoList;
