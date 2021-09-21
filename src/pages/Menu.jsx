import { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Sidenav } from 'rsuite';
import { Spin as Hamburger } from 'hamburger-react';

import "../styles/menu.css";



const Menu = () => {
    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    return (
        <div className="navigation">
            <Navbar className="navbar">
                <Navbar.Body>
                    <div className="burger">
                        <Hamburger className="burger" toggled={isOpen} toggle={toggleMenu} />
                        <Sidenav style={isOpen ? { display: 'flex' } : { display: 'none' }}>
                            <Nav>
                                <Nav.Item className="nav_link"><Link to="/">Acceuil</Link></Nav.Item>
                                <Nav.Item className="nav_link"><Link to="/appartement">Notre location</Link></Nav.Item>
                                <Nav.Item className="nav_link"><Link to="/barcares">Le Barcarès</Link></Nav.Item>
                                <Dropdown title="Autour de Le Barcarès">
                                    <Dropdown.Item><Link to="/port-leucate">Port Leucate</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/eus">Eus</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/forçareal">Forca Real</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/perillos">Périllos</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/salses">Salses le Château</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/tautavel">Tautavel</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/collioure">Collioure</Link></Dropdown.Item>
                                </Dropdown >
                                <Nav.Item className="nav_link"><Link to="/telechargement">Téléchargements</Link></Nav.Item>
                                <Nav.Item className="nav_link"><Link to="/contact">Contact</Link></Nav.Item>
                            </Nav>
                        </Sidenav>
                    </div>
                    <div className="desktop">
                        <Nav>
                            <Nav.Item className="nav_link"><Link to="/">Acceuil</Link></Nav.Item>
                            <Nav.Item className="nav_link"><Link to="/appartement">Notre location</Link></Nav.Item>
                            <Nav.Item className="nav_link"><Link to="/barcares">Le Barcarès</Link></Nav.Item>
                            <Dropdown title="Autour de Le Barcarès">
                                <Dropdown.Item><Link to="/port-leucate">Port Leucate</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/eus">Eus</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/forçareal">Forca Real</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/perillos">Périllos</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/salses">Salses le Château</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/tautavel">Tautavel</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/collioure">Collioure</Link></Dropdown.Item>
                            </Dropdown>
                            <Nav.Item className="nav_link"><Link to="/telechargement">Téléchargements</Link></Nav.Item>
                            <Nav.Item className="nav_link"><Link to="/contact">Contact</Link></Nav.Item>

                        </Nav>
                    </div>
                </Navbar.Body>
            </Navbar>
        </div>


    );
};

export default Menu;


