import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import Logo from '../assets/logo.png'
import { ImOffice, ImHome } from 'react-icons/im';
import { FaHistory } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri'
import {Link} from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" >
                <Container>
                    <Navbar.Brand href="#home"  >
                        <img src={Logo} alt="BrandLogo" height={40} width={40} />
                        &nbsp;
                        ECoRSC
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/"><ImHome /> &nbsp;&nbsp;  Home</Nav.Link>
                            <Nav.Link as={Link} to="/history-and-affiliations"><FaHistory />&nbsp;&nbsp;  History & Affliations</Nav.Link>
                            <Nav.Link as={Link} to="/central-office-bearers"><ImOffice /> &nbsp;&nbsp;  Central Office Bearers</Nav.Link>
                            <Nav.Link as={Link} to="#home"><RiContactsFill /> &nbsp;&nbsp;  Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent