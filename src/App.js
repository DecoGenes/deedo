import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from "./components/Login";
import firebase from './firebase'
import FAQ from './components/FAQ/index'



function App(props) {
  return (

    <Login />
    // <Router>
    //   <Switch>
    //     <div className="App">
    //       <Route exact path="/">
            
    //       </Route>
    //       <Route exact path="/home">
    //         <Home />
    //       </Route>
    //       <Route path="/DeedList">
    //         <DeedList></DeedList>
    //       </Route>
    //       <Route path="/profile">
    //         <Profile></Profile>
    //       </Route>
    //       <Route path="/DeedDone">
    //         <DeedDone></DeedDone>
    //       </Route>
    //       <Route path="/DeedCard">
    //         <Deedcard></Deedcard>
    //       </Route>
    //     </div>
    //   </Switch>
    // </Router>
  );
}

export default App;
