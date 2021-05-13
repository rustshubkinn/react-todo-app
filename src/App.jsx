import { useState } from 'react';

import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm';

import styles from './App.module.scss';

const MOCK_TODOS = [
  {
    text: 'Learn React',
    isCompleted: false,
    id: 1,
  },
  {
    text: 'Sleep',
    isCompleted: false,
    id: 2,
  },
  {
    text: 'Build really cool todo app',
    isCompleted: false,
    id: 3,
  },
];

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);

  const addTodo = (todo) => setTodos((prevState) => [...prevState, todo]);

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const renderTodos = () =>
    todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.todo_wrapper}>
        <TodoForm addTodo={addTodo} />
        {renderTodos()}
      </div>
    </div>
  );
}

export default App;
