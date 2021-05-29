import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import styles from './Todo.module.scss';

const Todo = ({ text, id, isCompleted, deleteTodo }) => {
  const [completed, setCompleted] = useState(isCompleted);

  const completeTodo = () => setCompleted(!completed);

  return (
    <div
      className={classNames({
        [styles.todo]: true,
        [styles.completed]: completed,
      })}
    >
      {text}
      <div>
        <Button type="button" onClick={completeTodo}>
          Complete
        </Button>
        <Button type="button" onClick={() => deleteTodo(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
