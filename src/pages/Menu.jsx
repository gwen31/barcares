import { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Icon } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Sidenav } from 'rsuite';



import { Spin as Hamburger } from 'hamburger-react';


import "../styles/menu.css";

const Menu = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="navigation">
            <Navbar className="navbar">
                <Navbar.Body>
                    <div className="burger">
                        <Hamburger className="burger" style={{ width: 250 }} toggled={isOpen} toggle={setOpen} />
                        <Sidenav>
                            <Nav>
                                <Nav.Item className="nav_link"><Link to="/">Acceuil</Link></Nav.Item>
                                <Nav.Item className="nav_link"><Link to="/appartement">Notre location</Link></Nav.Item>
                                <Nav.Item className="nav_link"><Link to="/barcares">Barcarès</Link></Nav.Item>
                                <Dropdown title="Autour de Barcarès">
                                    <Dropdown.Item><Link to="/port-leucate">Port Leucate</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/galamus">Gorge de Galamus</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="/forca-real">Forca Real</Link></Dropdown.Item>
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
                            <Nav.Item className="nav_link"><Link to="/barcares">Barcarès</Link></Nav.Item>
                            <Dropdown title="Autour de Barcarès">
                                <Dropdown.Item><Link to="/port-leucate">Port Leucate</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/galamus">Gorge de Galamus</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/forca-real">Forca Real</Link></Dropdown.Item>
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


