import { PropTypes } from 'prop-types';

import styles from './Todo.module.scss'

function Todo({ todo, completeTodo, deleteTodo }) {
  return (
    <div className={todo.isCompleted ? `${styles.completed}` : `${styles.todo}`}>
      {todo.text}
      <div>
        <button
          className={styles.completebtn}
          type="button"
          onClick={() => completeTodo(todo.id)}
        >
          Complete
        </button>
        <button
          className={styles.deletebtn}
          type="button"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
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
