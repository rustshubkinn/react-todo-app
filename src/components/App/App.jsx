import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'components/Pages/Home/Home';
import TodoPage from 'components/Pages/TodoPage/TodoPage';

import './global.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id/" component={TodoPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
