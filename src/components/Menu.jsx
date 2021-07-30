import { Link } from "react-router-dom";
import { Navbar, Nav, Icon } from 'rsuite';
import { Dropdown } from 'rsuite';
import "../styles/menu.css";

const Menu = () => {
    return (
        <div className="navigation">
            <Navbar className="navbar">
                <Navbar.Body>
                    <Nav>
                        <Nav.Item icon={<Icon icon="home" />} >Acceuil</Nav.Item>
                        <Nav.Item><Link to="/appartement">Notre location</Link></Nav.Item>
                        <Nav.Item><Link to="/barcares">Barcarès</Link></Nav.Item>
                        <Dropdown title="Autour de Barcarès">
                            <Dropdown.Item><Link to="/port-leucate">Port Leucate</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/galamus">Gorge de Galamus</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/forca-real">Forca Real</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/perillos">Périllos</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/salses">Salses le Château</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/tautavel">Tautavel</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/collioure">Collioure</Link></Dropdown.Item>
                        </Dropdown>
                        <Nav.Item><Link to="/telechargement">Téléchargements</Link></Nav.Item>
                        <Nav.Item><Link to="/contact">Contact</Link></Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item icon={<Icon icon="cog" />} ></Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </div >
    );
};

export default Menu;


