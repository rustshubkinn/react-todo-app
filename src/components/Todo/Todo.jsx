import { PropTypes } from 'prop-types';

function Todo({ todo, completeTodo, deleteTodo }) {
  return (
    <div
      className={todo.isCompleted ? 'completed' : 'todo'}
    >
      {todo.text}
      <div>
        <button
          className="complete-btn"
          type="button"
          onClick={() => completeTodo(todo.id)}
        >
          Complete
        </button>
        <button
          className="delete-btn"
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
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;
