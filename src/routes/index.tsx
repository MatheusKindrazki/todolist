import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Todo from '../pages/Todo';
import Calendar from '../pages/Calendar';

const Routes: React.FC= () => {
  
  return (
    <BrowserRouter>
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/todo" component={Todo} />
        <Route path="/calendar" component={Calendar} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;