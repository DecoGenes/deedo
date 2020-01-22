import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import DeedList from './components/Deedlist/index';
import Profile from './components/Profile';
import DeedDone from './components/Deedone/index';
import Deedcard from './components/Deedcard';


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path= "/">
            <h1> testing</h1>
          </Route>
          <Route path= "/DeedList">
            <DeedList></DeedList>
          </Route>
          <Route path="/Profile">
            <Profile></Profile>
          </Route>
          <Route path= "/DeedDone">
            <DeedDone></DeedDone>
          </Route>
          <Route path="/DeedCard">
            <Deedcard></Deedcard>
          </Route>
        </div>
      </Switch>   
    </Router>
  );
}

export default App;