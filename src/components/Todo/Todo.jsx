import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import Button from '../Button/Button';

import styles from './Todo.module.scss';

function Todo({ todo, completeTodo, deleteTodo }) {
  return (
    <div
      className={classNames({
        [styles.todo]: true,
        [styles.completed]: todo.isCompleted,
      })}
    >
      {todo.text}
      <div>
        <Button type="button" onClick={() => completeTodo(todo.id)}>
          Complete
        </Button>
        <Button type="button" onClick={() => deleteTodo(todo.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.any).isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
