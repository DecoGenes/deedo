import React, { useState} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import DeedList from './components/Deedlist/index';
import Profile from './components/Profile';
import DeedDone from './components/Deedone/index';
import DeedCard from './components/Deedcard/index';
import NavBarMain from './components/Navbar';
import DeedWard from './components/Deedward/index'
import Home from './components/Home'
import Login from "./components/Login";
import firebase from './firebase'
import FAQ from './components/FAQ/index'



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
          <Route path="/DeedWard">
            <DeedWard></DeedWard>
          </Route>
          <Route path="/FAQ">
            <FAQ></FAQ>
          </Route>
        </div>
      </Switch>   
    </Router>
  );
}

export default App;
