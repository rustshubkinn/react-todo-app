import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import TodoPage from 'pages/TodoPage/TodoPage';

import './global.scss';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/:id/" component={TodoPage} />
  </Switch>
);

export default App;
