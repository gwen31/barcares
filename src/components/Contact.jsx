import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Button, ButtonToolbar } from 'rsuite';

import "../styles/contact.css";

const Contact = () => {
    return (
        <div className="formulaire">
            <h3>Formulaire de contact</h3>
            <div className="bloc-form">
                <Form fluid>
                    <FormGroup>
                        <ControlLabel>Nom</ControlLabel>
                        <FormControl name="name" />

                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Prénom</ControlLabel>
                        <FormControl name="name" type="name" />

                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl name="email" type="email" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel>
                        <FormControl rows={5} name="textarea" componentClass="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar className="btns">
                            <Button className="submit">Envoyer</Button>
                            <Button className="submit"><Link to="/">Quitter</Link></Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
};

export default Contact;