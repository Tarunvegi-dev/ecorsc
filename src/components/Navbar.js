import React from 'react';
import { Container, Row, Col, Nav, Image } from 'react-bootstrap'
import Logo from '../assets/logo.png'
import { ImOffice, ImHome } from 'react-icons/im';
import { FaHistory } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner.png'

const NavbarComponent = () => {
    return (
        <>
            <Image src={BannerImage} alt="Banner-Image" fluid />
            <nav className="custom-nav">
                <Nav.Link as={Link} to="/"><ImHome /> &nbsp;&nbsp;  Home</Nav.Link>
                <Nav.Link as={Link} to="/history-and-affiliations"><FaHistory />&nbsp;&nbsp;  History & Affliations</Nav.Link>
                <Nav.Link as={Link} to="/central-office-bearers"><ImOffice /> &nbsp;&nbsp;  Central Office Bearers</Nav.Link>
                <Nav.Link as={Link} to="/contact"><RiContactsFill /> &nbsp;&nbsp;  Contact Us</Nav.Link>
            </nav>
        </>
    )
}

export default NavbarComponent