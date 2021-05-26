import { useEffect, useState } from 'react';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import classes from './App.module.scss';
import Loader from './components/Loader/Loader';

const URL =
  'https://todo-list-544c0-default-rtdb.europe-west1.firebasedatabase.app/todos.json';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);

    const response = await fetch(URL);
    const result = await response.json();

    const normalizedTodos = Object.keys(result).map((k) => result[k]);

    setTodos(normalizedTodos);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={classes.wrapper}>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.todo_list_wrapper}>
          <TodoForm setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      )}
    </div>
  );
};

export default App;
