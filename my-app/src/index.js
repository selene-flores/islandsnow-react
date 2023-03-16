import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Image, Container, Nav, Navbar, NavDropdown, Col, Row, ListGroupItem, FormGroup, FormControl, Form, Button } from 'react-bootstrap';
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill/> </Nav.Link>
        <Nav.Link><Search/> </Nav.Link>
        <Nav.Link><PersonFill/> </Nav.Link>
        <NavDropdown title={<Cart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
  </Navbar>
);

const IslandSnowLogo = () => (
  <Container>
    <Image src="islandsnow-logo.png" alt="Island Snow Logo" className="pt-2"/>
  </Container>
)

const MiddleMenu = () => (
  <Navbar bg="white" className="mt-5">
    <Container className="col-5 justify-content-evenly">
      <NavDropdown title="MEN"></NavDropdown>
      <NavDropdown title="WOMEN"></NavDropdown>
      <NavDropdown title="KIDS"></NavDropdown>
      <NavDropdown title="BRANDS"></NavDropdown>
      <Nav.Link>SEARCH</Nav.Link>
    </Container>
  </Navbar>
)

const FullWidthImage = () => (
  <Container>
    <Image src="islandsnow-main.png" alt="Island Snow Background Image" className="w-100 justify-content-center"/>
  </Container>
)

const FooterMenu = () => (
  <Container id="footerMenu" className="text-light">
    <Row className="text-start align-items-center pt-3">
      <Col>
        <ListGroupItem id="columnTitle">NAVIGATION</ListGroupItem>
        <hr id="line"/>
        <ListGroupItem className="pb-2">About Us</ListGroupItem>
        <ListGroupItem id="columnMenu">Employment</ListGroupItem>
      </Col>
      <Col>
        <ListGroupItem>MAIN MENU</ListGroupItem>
        <hr id="line"/>
        <ListGroupItem className="pb-2">Men</ListGroupItem>
        <ListGroupItem>Women</ListGroupItem>
      </Col>
      <Col>
        <ListGroupItem>CONNECT</ListGroupItem>
        <hr id="line"/>
        <ListGroupItem className="pb-md-1">Sign up for the latest updates</ListGroupItem>
        <ListGroupItem>
          <Form>
            <FormGroup>
              <FormControl id="email" type="text" placeholder="Enter Email Address" className="w-50 d-inline"/>
              <Button type="submit" className="border-0 bg-transparent pb-0 mb-0">Join</Button>
            </FormGroup>
          </Form>
        </ListGroupItem>
      </Col>
    </Row>
  </Container>
)

const IslandSnow = () => (
  <Container className="text-center px-0 m-auto">
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);
