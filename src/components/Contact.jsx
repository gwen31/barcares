import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Form, FormGroup, ControlLabel } from 'rsuite';
import { Button, ButtonToolbar } from 'rsuite';
import { Alert } from 'rsuite';

import "../styles/contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById('not-mail');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = "none";
            return true;
        } else {
            mail.style.display = "block";
            mail.style.animation = 'dongle 1s';
            setTimeout(() => {
                mail.style.animation = "none";
            }, 1000);
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && isEmail() && message) {
            sendFeedback("template_12uthlm", {
                name,
                email,
                message,
            });
        } else {
            Alert.error('Merci de remplir les champs manquants *.');
        }
    };

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send("service_0a9gl6v", templateId, variables)
            .then((res) => {
                Alert.success('Votre message a été envoyé ! Nous vous recontacterons dès que possible.');
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) => {
                    Alert.warning("Une erreur s'est produite, veuillez réessayer.")

                });
    }

    return (
        <div className="formulaire">
            <h3>Pour nous contacter !</h3>
            <div className="bloc-form">
                <Form fluid>
                    <FormGroup>
                        <ControlLabel>Nom *</ControlLabel>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Votre nom"
                            value={name}
                        />

                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email *</ControlLabel>
                        <label id="not-mail">Email non valide</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Votre email"
                            value={email}
                        />
                    </FormGroup>
                    <FormGroup className="champ">
                        <ControlLabel>Message *</ControlLabel>
                        <textarea rows={5}
                            type="text"
                            id="message"
                            name="textarea"
                            componentClass="textarea"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Votre message"
                            value={message}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar className="btns">
                            <Button
                                className="submit"
                                onClick={handleSubmit}
                            >Envoyer
                            </Button>
                            <Button className="submit"><Link to="/">Quitter</Link></Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
};

export default Contact;