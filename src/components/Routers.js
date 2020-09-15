import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={SignUp} exact />
        <Route path='/SignIn' component={SignIn} />
        <Route path='/home' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
