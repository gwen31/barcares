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
                        <Nav.Item>Notre location</Nav.Item>
                        <Nav.Item>Barcarès</Nav.Item>
                        <Dropdown title="Autour de Barcarès">
                            <Dropdown.Item>Port Leucate</Dropdown.Item>
                            <Dropdown.Item>Gorge de Galamus</Dropdown.Item>
                            <Dropdown.Item>Forca Real</Dropdown.Item>
                            <Dropdown.Item>Périllos</Dropdown.Item>
                            <Dropdown.Item>Salses le Château</Dropdown.Item>
                            <Dropdown.Item>Tautavel</Dropdown.Item>
                            <Dropdown.Item>Collioure</Dropdown.Item>
                        </Dropdown>
                        <Dropdown title="Téléchargement">
                            <Dropdown.Item>Bail</Dropdown.Item>
                            <Dropdown.Item>Etat des lieux</Dropdown.Item>
                        </Dropdown>
                        <Nav.Item>Contact</Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </div >
    );
};

export default Menu;


