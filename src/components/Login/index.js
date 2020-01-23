import React from 'react';
import './style.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import firebase from 'firebase';
import DeedList from '../Deedlist';
import Profile from '../Profile';
import DeedDone from '../Deedone';
import Deedcard from '../Deedcard';
import DeedWard from "../Deedward";
import FAQ from "../FAQ";
import NavBarMain from '../Navbar';
import Home from '../Home'
// import App from '../../App'
import { Container, Col, Card, ListGroup, ListGroupItem, ButtonToolbar, Button, Row } from 'react-bootstrap';
import logo from  './logo.jpeg'


export default class Login extends React.Component {
    state = {
        isSignedIn: false,
        redirect: false
    };

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
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
                            <Container className="align-items-center" >
                                <Row className="align-items-center justify-self-center">
                                    <Card className="col-12 home-container" >
                                        <Card.Img variant="top" className='logo-img' src={logo}  />
                                        <Card.Body>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <div className='signInPage'>
                                                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                                            </div>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="#">Sponsor</Card.Link>
                                            <Card.Link href="#">Rate Us</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            </Container>
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
                                <DeedWard></DeedWard>
                            </Route>
                            <Route path="/FAQ">
                                <FAQ></FAQ>
                            </Route>
                        </div>
                    </Switch>
                </Router>
                <button className='singout-btn' loggedin={this.state.isSignedIn} onClick={() => firebase.auth().signOut()}>Sign-out</button>
            </div>
        );
    }
}