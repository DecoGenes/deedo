import React from 'react';
import Login from '../Login';
import { Container, Col, Card, ListGroup, ListGroupItem, ButtonToolbar, Button, Row } from 'react-bootstrap';

export default function Home() {

    return (

        <Container className="align-items-center">
            <Row className="align-items-center">
                <Card className="align-items-center" >
                    {/* <Card.Img variant="top" src={imagetest} /> */}
                    <Card.Body>
                        <Card.Title>Deedo</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                             </Card.Text>
                    </Card.Body>
                    {/* <ListGroup className="list-group-flush">
                        <Login />
                    </ListGroup> */}
                    <Card.Body>
                        <Card.Link href="#">Sponsor</Card.Link>
                        <Card.Link href="#">Rate Us</Card.Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    )
}
