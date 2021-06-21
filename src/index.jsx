import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from 'components/App/App';
import TodoPage from 'components/Pages/TodoPage/TodoPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/todo/:id/:text" component={TodoPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
