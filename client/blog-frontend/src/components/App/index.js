import React from 'react';
import { Route,Switch } from 'react-router-dom'

import Home from '../Home'
import SignUpForm from '../SignUpForm'


const App = ()=>{

  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUpForm} />
      </Switch>
    </div>
  )
}

export default App
