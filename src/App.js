import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Recipes from './Recipes/Recipes';
import Recipe from './Recipe/Recipe';

import './App.css'

const App = () => {

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path="/" component={Recipes}/>
          <Route exact path="/recipe" component={Recipe}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
