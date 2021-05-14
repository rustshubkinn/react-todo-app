import { useState } from 'react';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import classes from './App.module.scss';

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

const App = () => {
  const [todos, setTodos] = useState(MOCK_TODOS);

  return (
    <div className={classes.wrapper}>
      <div className={classes.todo_list_wrapper}>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
