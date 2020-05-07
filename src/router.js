import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import IndexPage from './routes/IndexDemo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/demo" exact component={IndexDemo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
