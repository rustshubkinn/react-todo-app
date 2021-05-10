import './App.scss';
import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn React',
      isCompleted: false,
      id: Math.random(),
    },
    {
      text: 'Sleep',
      isCompleted: false,
      id: Math.random(),
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
      id: Math.random(),
    },
  ]);

  const addTodo = (obj) => {
    const newTodos = [...todos, obj];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.isCompleted = true;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
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
  todo: PropTypes.objectOf.isRequired,
};

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const obj = {
      text: value,
      isCompleted: false,
      id: Math.random(),
    };
    addTodo(obj);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
TodoForm.propTypes = {
  addTodo: PropTypes.objectOf.isRequired,
};

export default App;
