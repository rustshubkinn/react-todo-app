import { PropTypes } from "prop-types";

function Todo({ todo, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
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
      </div>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.any).isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todo;
