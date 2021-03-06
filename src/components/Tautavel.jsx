import React from 'react';
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
                        <p>Nous sommes allés découvrir le village de <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tautavel">Tautavel</a> dans les 
                        <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pyr%C3%A9n%C3%A9es-Orientales"> Pyrénées Orientales</a>, de 878 habitants
                        à 40 minutes de Le Barcarès. Cette commune fait partie de la route des vins.</p>
                        <p>Vous y trouverez le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Mus%C3%A9e_de_Tautavel_-_Centre_europ%C3%A9en_de_pr%C3%A9histoire">musée de préhistoire</a> qui vous fera voyager dans le passé avec 700 000 ans de présence humaine.
                        Des parcours de randonnée pour y découvrir des lieux comme le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Tautavel">château de Tautavel</a> en ruines, la <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tour_del_Far">Torre del far </a>
                        mais également des grottes accessibles à pied.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://goo.gl/maps/YvimRfSibur35emZ9">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                    <Panel header="LES GORGES DE GOULEYROUS" >
                        <p>Nous avons trouvé également un lieu magnifique naturel : Les <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Gorges_du_Verdouble">gorges de Gouleyrous</a>, fait partie de la commune de Tautavel.</p>
                        <p>Une rivière sauvage,le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Verdouble">Verdouble </a>qui a taillé la roche des falaises de la Dévèze entre Tautavel et Vingrau. Ces gorges sont
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
                     <Panel>
                        <p>A Tautavel, il y a le musée de la préhistoire et les ruines d'un château.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/rando1.jpg" height="350" width="400" alt="Chemin de randonnée"/>
                     <Panel>
                        <p>Pour accéderà ces ruines, il y a un chemin agréable et ombragé.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ruines.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel>
                      <p>Nous nous rapprochons des ruines du château de Tautavel.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ruines1.jpg" height="350" width="400" alt="" />
                     <Panel>
                      <p>On se rapproche des ruines du château. C'est magnifique.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ruines2.jpg" height="350" width="400" alt="Ruines du château" />
                     <Panel>
                      <p>Arrivée tout en haut, magnifique paysage et ruines avec des rochers.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ville.jpg" height="350" width="400" alt="Village de Tautavel"/>
                      <Panel>
                       <p>Une vue extraordinaire sur la village et des Pyrénées Orientales</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/ville1.jpg" height="350" width="400" alt="vue sur le paysage"/>
                     <Panel>
                      <p>Autre vue sur le payage du haut de Tautavel.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Tautavel/paysage.jpg" height="350" width="400" alt="paysage" />
                     <Panel>
                      <p>Au loin, la Torre del Far. On y accède par des chemins de randonnée.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Tautavel/gorges.jpg" height="350" width="400" alt="Les gorges de Gouleyrous" />
                      <Panel>
                       <p>Nous arrivons dans un lieu naturel non loin de Tautavel, à Gouleyrous.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Tautavel/gorges1.jpg" height="350" width="400" alt="Les gorges" />
                      <Panel>
                        <p>Une petite plage sympathique mais attention la baignade est interdite.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Tautavel/gorges2.jpg" height="350" width="400" alt="Gorges de Gouleyrous" />
                      <Panel>
                       <p>Lieu magique, où des personnes pratiquent de l'escalade.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Tautavel/gorges3.jpg" height="350" width="400" alt="Les gorges de Gouleyrous" />
                      <Panel>
                       <p>Spectaculaires, eau transparente, des bacines créaient par l'eau et la roche.</p>
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
        marginTop:"40px"
        },
    },
    containercard:{
        "@media (min-width: 738px)":{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginLeft: "70px",
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
    lienText:{
        "@media (min-width: 738px)":{
        fontSize: "1.3rem"
    }
}
})

export default Tautavel;