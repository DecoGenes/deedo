import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import DeedList from './components/Deedlist/index'
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <h1> testing</h1>
          <Route path="/DeedList">
            <DeedList></DeedList>
          </Route>
          <Route path="/Profile">
            <Profile></Profile>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
