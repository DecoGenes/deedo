import React, { useState} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import DeedList from './components/Deedlist/index';
import Profile from './components/Profile';
import DeedDone from './components/Deedone/index';
import DeedCard from './components/Deedcard';
import DeedWard from './components/Deedward';
import NavBarMain from './components/Navbar';
import Home from './components/Home'
import Login from "./components/Login";
import firebase from './firebase'



function App() {

  const [login, setLogin] = useState(false)

  function handleLogIn(){
    setLogin(true)
  }

  return (
    <Router>
      <Switch>
        <div className="App">
          <NavBarMain></NavBarMain>
          <Route exact path= "/">
            <Home />
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
            <DeedCard></DeedCard>
          </Route>
          <Route path="/DeedWards">
            <DeedWard></DeedWard>
          </Route>
        </div>
      </Switch>   
    </Router>
  );
}

export default App;
