import { arrayOf, shape } from 'prop-types';

import Todo from 'components/Todo/Todo';
import classes from './TodoList.module.scss';

const TodoList = ({ todos }) => {
  if (!todos) {
    return <></>;
  }

  const renderTodos = () =>
    todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        id={todo.id}
        isCompleted={todo.isCompleted}
        className={classes.todo}
      />
    ));

  return <div>{renderTodos()}</div>;
};

TodoList.propTypes = {
  todos: arrayOf(shape({})).isRequired,
};

export default TodoList;
