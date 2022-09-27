import React from 'react';
import { Container } from 'react-bootstrap'
import Logo from '../assets/logo.png'
import { ImOffice, ImHome } from 'react-icons/im';
import { FaHistory } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri'

const Navbar = () => {
    return (
        <div style={{ background: '#083e77b4'}}>
            <Container>
                <nav className="Navbar">
                    <a href="#" className="Navbar-Brand">
                        <img src={Logo} alt="BrandLogo" height={50} width={50} />
                        &nbsp;
                        ECoRSC
                    </a>
                    <ul className="Navs">
                        <li className="Nav-Items"><ImHome /> &nbsp; Home</li>
                        <li className="Nav-Items"><FaHistory />&nbsp; History & Affliations</li>
                        <li className="Nav-Items"><ImOffice /> &nbsp; Central Office Bearers</li>
                        <li className="Nav-Items"><RiContactsFill /> &nbsp; Contact Us</li>
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default Navbar