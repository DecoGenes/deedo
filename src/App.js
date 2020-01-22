import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import DeedList from './components/Deedlist/index'

function App() {
  return (
    <Router>
    <Switch>
    <div className="App">
      <h1> testing</h1>
    <Route path= "/DeedList">
      <DeedList></DeedList>
    </Route>
    </div>
    </Switch>   
    </Router>
  );
}

export default App;
