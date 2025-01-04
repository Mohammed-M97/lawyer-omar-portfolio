import React from "react";
import { Container ,Nav ,Navbar } from 'react-bootstrap'
import pic from '../assets/images/Capture12.JPG'

function NavigationBar() {
    return (
        <Navbar expand='lg' className="bg-primary w-100 fixed-top z-1" data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href="#" className="fs-4 Navbar-Brand">
                    {/* John <span className="text-dark">S.</span> */}
                    <img className="logo" src={pic} alt="" srcset="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 d-flex justify-content-end">
                        <Nav.Link href="#header">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Our Services</Nav.Link>
                        <Nav.Link href="#contact">Contect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;