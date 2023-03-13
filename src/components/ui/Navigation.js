import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Assignment</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/teacher/create">Create Teacher</Nav.Link>
                    <Nav.Link href="/student/create">Create Student</Nav.Link>
                </Nav>
                <Nav className="me-auto ms-5">
                    <Nav.Link className = "">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
