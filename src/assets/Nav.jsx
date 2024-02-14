import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const PortfolioNav = () => {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <Container>
            <Nav className="nav nav-tabs fixed-top " defaultActiveKey="/home">
                <Nav.Item className='nav-item'>
                    <Nav.Link className={currentPage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentPage('home')} as={Link} to="/">About me</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-item'>
                    <Nav.Link className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentPage('portfolio')} as={Link} to='/portfolio'>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-item'>
                    <Nav.Link className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentPage('contact')} as={Link} to='/contact'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-item'>
                    <Nav.Link className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentPage('resume')} as={Link} to='/resume'>Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default PortfolioNav;
