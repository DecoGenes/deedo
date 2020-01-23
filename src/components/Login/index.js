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
            return <Redirect to='/' />
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

    componentDidUpdate(){
        if(this.state.isSignedIn == true){
            this.renderRedirect()
        } else {
            return <Redirect to='/' />
        }
        
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
                                                DeeDo is a platform that provides opportunities to do good deeds 
                                                and get rewards. What are you waiting for to DeeDo?
                                            </Card.Text>
                                            <h1>Join Now!</h1>
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
                            <DeedList></DeedList>
                            </Route>
                            <Route exact path="/home">
                            <Home />
                            </Route>
                            <Route path="/DeedList">
                                
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
                <button className='singout-btn' onClick={() => firebase.auth().signOut()}>Sign-out</button>
            </div>
        );
    }
}