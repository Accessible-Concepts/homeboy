import React from 'react';
//import './Home.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


function Navigation() {
  return (
      <Navbar fixed="top" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home"><img className="App-logo" src="./images/homeboy.png" alt="Homeboy - Your Buddy In Da Building" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#Tenants">Tenants</Nav.Link>
            <Nav.Link href="#Messages">Messages</Nav.Link>
            <Nav.Link href="#Issues">Issues</Nav.Link>
            <Nav.Link href="#Voting">Voting</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#SignUp">
             Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

function Main() {
  return (
    <main>
      <Jumbotron className="hero text-center">
        <h1>Welcome to Homeboy - Your Building Management Buddy!</h1>
        <p>
        With our groundbreaking Homeowner Association Management System,
        communication between tenants and the homeowner association committee has never been easier!
        </p>
        <p>
          <Button variant="primary" size="lg" className="px-5 py-2">Sign Up - It's Free!</Button>
        </p>
      </Jumbotron>
      <Container className="featureWrapper text-center mt-4">
        <h2>Love Thy Neighbor</h2>
        <p>
        Use Homeboy to make it good in the hood! We’ve got the features you need to avoid gang fights and promote happy neighboring!
        </p>
        <CardDeck>
          <Col lg={4}>
            <Card>
                <Card.Header>
                  <Card.Title>Issue Management</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src="./images/issue-management.png" />
                <Card.Body>
                  <Card.Text>
                  Striving to achieve structured tracking for issues reported by homies?
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0">
                  <Button variant="primary" block>Make It Work</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Header>
                  <Card.Title>Easy Messaging</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src="./images/messaging.png" />
                <Card.Body>
                  <Card.Text>
                  Begging for homies to pay attention to messages from the building's committee?
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0">
                  <Button variant="primary" block>Make It Happen</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Header>
                  <Card.Title>Open Voting</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src="/images/voting.png" />
                <Card.Body>
                  <Card.Text>
                  Dreaming of improving the way financial desicions are made in your building? 
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0">
                  <Button variant="primary" block>Make It Count</Button>
                </Card.Footer>
            </Card>
          </Col>
        </CardDeck>      
    </Container>
    </main>
  );
}

function Home() {
  return (
    <div className="Home">
       <Navigation />
       <Main />
    </div>
  );
}

export default Home;
