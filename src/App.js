import React, { useEffect} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import DeedList from './components/Deedlist/index';
import Profile from './components/Profile';
import DeedDone from './components/Deedone/index';
import Deedcard from './components/Deedcard';
import Home from './components/Home'
import Login from "./components/Login";
import firebase from './firebase'



function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path= "/">
            <Home />
            <h1> testing</h1>
            <Login />
          </Route>
          {/* <Route exact path= "/login">
            <Login />
          </Route> */}
          <Route path= "/DeedList">
            <DeedList></DeedList>
          </Route>
          <Route path="/profile">
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
