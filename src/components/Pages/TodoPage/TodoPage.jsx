import { useParams, Link } from 'react-router-dom';

import Button from 'components/UI/Button/Button';

import classes from './TodoPage.module.scss';

const TodoPage = () => {
  const { text } = useParams();

  return (
    <div className={classes.todopage}>
      <p>
        Common task is: <h2>{text}</h2>
      </p>
      <Button>
        <Link to="/">Back</Link>
      </Button>
    </div>
  );
};

export default TodoPage;
