import React from 'react';
import './style.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import firebase from 'firebase';
import DeedList from '../Deedlist';
import Profile from '../Profile';
import DeedDone from '../Deedone';
import Deedcard from '../Deedcard';
import NavBarMain from '../Navbar';
import Home from '../Home'
// import App from '../../App'


export default class Login extends React.Component {
    state = {
        isSignedIn: false,
        redirect: false
    };

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home' />
        }
    }
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({ isSignedIn: !!user, redirect: true })
        );
        this.renderRedirect();
    }
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        if (!this.state.isSignedIn) {
            return (
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <div className='signInPage'>
                                <h1>DeeDo</h1>
                                <p>Please sign-in:</p>
                                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                            </div>
                        </Route>
                    </Switch>
                </Router>
            );
        }
        return (
            <div className='signOutButtonPositioning'>
                <Router>
                    <Switch>
                        <div className="App">
                        <NavBarMain />
                            <Route exact path="/">
                                
                            </Route>
                            <Route exact path="/home">
                                <Home />
                            </Route>
                            <Route path="/DeedList">
                                <DeedList></DeedList>
                            </Route>
                            <Route path="/profile">
                                <Profile></Profile>
                            </Route>
                            <Route path="/DeedDone">
                                <DeedDone></DeedDone>
                            </Route>
                            <Route path="/DeedCard">
                                <Deedcard></Deedcard>
                            </Route>
                            <Route path="/DeedWard">
                                <Deedcard></Deedcard>
                            </Route>
                            <Route path="/DeedCard">
                                <Deedcard></Deedcard>
                            </Route>
                        </div>
                    </Switch>
                </Router>
                <button className='singout-btn' loggedin={this.state.isSignedIn} onClick={() => firebase.auth().signOut()}>Sign-out</button>
            </div>
        );
    }
}