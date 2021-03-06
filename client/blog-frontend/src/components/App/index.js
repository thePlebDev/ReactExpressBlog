import React from 'react';
import { Route,Switch } from 'react-router-dom'

import Home from '../Home'
import SignUpForm from '../SignUpForm'
import Login from '../LoginForm'
import NotFound from '../NotFound'
import Profile from '../Profile';


const App = ()=>{

  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
