import React from 'react';
import { Navbar, Container, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: 'red' }} variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />{' '}
            HOME
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto">
              <Nav.Link href="#link1" className="me-3 fs-5 text-light">My Ticket</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title="WorkShop" id="basic-nav-dropdown" className="me-lg-2 fs-5 text-light">
                <NavDropdown.Item href="/hoihoa">Hôi Họa</NavDropdown.Item>
                <NavDropdown.Item href="/camhoa">Cắm Hoa</NavDropdown.Item>
                <NavDropdown.Item href="/thucong">Thủ Công</NavDropdown.Item>
                <NavDropdown.Item href="/lambanh">Làm Bánh</NavDropdown.Item>
                <NavDropdown.Item href="/other">Other</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/event" className="me-lg-2 fs-5 text-light">Create Workshop</Nav.Link>
              <Form className="d-flex mb-2 mb-lg-0" style={{ marginLeft: '20px' }}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
              <Nav.Link href="/user" className="me-3 fs-5 text-light" style={{ fontSize: '1.2rem' }}>
                Login | Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
