import React from 'react';
import {Link} from 'react-router-dom';
import { PanelGroup, Panel } from 'rsuite';

import { StyleSheet, css } from 'aphrodite';

const Tautavel = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Tautavel</h1>
            <h4>(visite du 26 avril 2019)</h4>
                <div>
                  <PanelGroup className={css(styles.paragraphed)}>
                    <Panel header="LE VILLAGE DE TAUTAVEL">
                        <p>Nous sommes allés découvrir le village de Tautavel dans les Pyrénées Orientales, de 878 habitants
                        à 40 minutes de <Link to="/barcares">Le Barcarès</Link>. Cette commune fait partie de la route des vins.</p>
                        <p>Vous y trouverez le musée de préhistoire qui vous fera voyager dans le passé avec 700 000 ans de présence humaine.
                        Des parcours de randonnée pour y découvrir des lieux comme le château de Tautavel en ruines, la Torre del far
                        mais également des grottes accessibles à pied.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://goo.gl/maps/YvimRfSibur35emZ9">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                    <Panel header="LES GORGES DE GOULEYROUS" >
                        <p>Nous avons trouvé également un lieu magnifique naturel : Les gorges de Gouleyrous, fait partie de la commune de Tautavel.</p>
                        <p>Une rivière sauvage (le Verdouble) qui a taillé la roche des falaises de la Dévèze entre Tautavel et Vingrau. Ces gorges sont
                            spectaculaires, invitent à l'escalade ou à la contemplation, avec une plage propice au pique nique.</p>
                        <p>Par contre, le parking au milieu des vignes est payant, 5 euros pour les voitures et motos, et 8 euros pour les camping car pour la journée.</p>
                        <p>Si vous voulez y aller cliquer ici  <a href="https://goo.gl/maps/66KgrrJ8wjBJFha47">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>
                    </Panel>
                    </PanelGroup>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/rando.jpg" height="350" width="400" alt="Des ruines" />
                     <Panel header="LES RUINES DU CHÂTEAU">
                        <p>A Tautavel, nous y trouvons le musée de la préhistoire et les ruines d'un château.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/rando1.jpg" height="350" width="400" alt="Chemin de randonnée"/>
                     <Panel header ="CHEMIN DE RANDONNEE">
                        <p>Pour accéder au ruines du château, il y a un chemin de randonnée agréable et ombragé.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ruines.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel className={css(styles.titlecard)} header="LES RUINES">
                      <p>Nous nous rapprochons des ruines du château de Tautavel.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ruines1.jpg" height="350" width="400" alt="" />
                     <Panel header="ON SE RAPPROCHE">
                      <p>On se rapproche des ruines du château. Se sont des ruines mais c'est magnifique.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ruines2.jpg" height="350" width="400" alt="Ruines du château" />
                     <Panel header="LES RUINES DU CHÂTEAU">
                      <p>Arrivée tout en haut, magnifique paysage et ruines avec des rochers.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ville.jpg" height="350" width="400" alt="Village de Tautavel"/>
                      <Panel header="LE VILLAGE DE TAUTAVEL">
                       <p>Une vue extraordinaire sur la village de Tautavel et des Pyrénées Orientales</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ville1.jpg" height="350" width="400" alt="vue sur le paysage"/>
                     <Panel header="UN PAYSAGE EXTRAORDINAIRE">
                      <p>Autre vue sur le payage du haut de Tautavel, à coté des ruines du château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/paysage.jpg" height="350" width="400" alt="paysage" />
                     <Panel header="LA TORRE DEL FAR">
                      <p>Au loin, nous voyons la Torre del Far. On y accède par de nombreux chemin de randonnée.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Tautavel/gorges.jpg" height="350" width="400" alt="Les gorges de Gouleyrous" />
                      <Panel header="LES GORGES DE GOULEYROUS">
                       <p>Nous arrivons dans un lieu naturel et spendide à Gouleyrous, juste à coté de Tautavel.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Tautavel/gorges1.jpg" height="350" width="400" alt="Les gorges" />
                      <Panel header="LES GORGES">
                        <p>Il y a une petite plage sympathique mais attention la baignade est interdite.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Tautavel/gorges2.jpg" height="350" width="400" alt="Gorges de Gouleyrous" />
                      <Panel header="EN PLEINE NATURE">
                       <p>Lieu exceptionnel, où des randonneurs et des personnes pratiquent de l'escalade.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Tautavel/gorges3.jpg" height="350" width="400" alt="Les gorges de Gouleyrous" />
                      <Panel header="LES GORGES DE GOULEYROUS">
                       <p>Elles sont spectaculaires, avec l'eau transparente, les bacines créaient par l'eau dans la roche.</p>
                      </Panel>
                </Panel>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        "@media (min-width: 738px)":{
        width:'78%',
        padding: "20px",
        display: "flex",
        margin: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        },
    },
    containercard:{
        "@media (min-width: 738px)":{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "auto",
        padding: "20px",
        },
    },
    card:{
        "@media (min-width: 738px)":{
        boxShadow: '8px 8px 10px 0 rgba(0,0,0,0.5)',
        width: "400px",
        marginRight: '60px',
        marginBottom:'60px',
        backgroundColor:'white' 
         },
    },
})

export default Tautavel;