import React from 'react';
import {Link} from 'react-router-dom';
import { Panel } from 'rsuite';

import { StyleSheet, css } from 'aphrodite';

const Salses = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Salses le Château</h1>
            <h4>(visite du 8 mars 2019)</h4>
                <div>
                    <Panel header="La Forteresse de Salses le Château">
                        <p>Commune des Pyrénée Orientales, Salses le Château possède une forteresse construite par les espagnols en 1502
                            pour protéger la frontières. Proche de <Link to="/barcares">Le Barcarès</Link>, une visite qui peut être faite
                             de temps couvert ou venteux.</p>
                        <p>Une visite du fort qui se fait en partie en visite guidée que nous trouvons trop rapide et qui ne permet pas de voit
                            tout le potentiel de la forteresse. Le rez de chaussée se fait seul pour visiter les différentes salles.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://goo.gl/maps/5vtsCjv5xtYgCgvZ8">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse1.jpg" height="350" width="400" alt="Salses le château" />
                     <Panel header="SALSES LE CHÂTEAU">
                        <p>Nous avons découvert proche de Barcarès la forteresse de Salses le Château.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse2.jpg" height="350" width="400" alt="Salses le château"/>
                     <Panel header ="LA FORTERESSE">
                        <p>C'est une impressionante forteresse a visiter, accéssible pour toute la famille.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse3.jpg" height="350" width="400" alt="L'entrée de la forteresse"/>
                     <Panel className={css(styles.titlecard)} header="ON SE RAPPROCHE">
                      <p>Nous nous rapprochons de l'entrée de la Forteresse.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse4.jpg" height="350" width="400" alt="L'entrée de la Forteresse" />
                     <Panel header="L'ENTREE DE LA FORTERESSE">
                      <p>Extraordinaire entrée, de brique rouque et des moulures magnifique.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse5.jpg" height="350" width="400" alt="Une tours de la forteresse" />
                     <Panel header="VUE SUR UNE TOUR">
                      <p>Sur cette photo, on peut voir une tour et un bout des remparts.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse6.jpg" height="350" width="400" alt="Les remparts de Salses le château"/>
                      <Panel header="LE REMPARTS">
                       <p>Photo prise de l'entrée, montrant les impressionants remparts de Salses le Château.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse7.jpg" height="350" width="400" alt="Remparts et une tour"/>
                     <Panel header="REMPARTS ET UNE TOUR">
                      <p>Le coté gauche des remparts avec une tour, toujours à l'entrée.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse8.jpg" height="350" width="400" alt="Plan de la forteresse" />
                     <Panel header="PLAN DE LA FORTERESSE">
                      <p>Voici une petite photo d'un plan de la forteresse, afin que vous puissiez avoir un petit aperçu.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Salses/salse9.jpg" height="350" width="400" alt="Vue de haut des remparts" />
                      <Panel header="LES REMPARTS">
                       <p>Nous sommes montés plus haut pour encore plus découvrir cette forteresse .</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Salses/salse10.jpg" height="350" width="400" alt="Vue sur l'entrée de la forteresse" />
                      <Panel header="AUTRE VUE DE LA FORTERESSE">
                        <p>Magnifique vue sur les pierres de la forteresse, vue sur l'entrée.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Salses/salse11.jpg" height="350" width="400" alt="La Cour de la forteresse" />
                      <Panel header="LA COUR INTERIEUR">
                       <p>Nous arrivons sur la place d'arme impressionnante et il y a des salles à visiter.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Salses/salse12.jpg" height="350" width="400" alt="Salses le château" />
                      <Panel header="LA FORTERESSE DE SALSES LE CHÂTEAU">
                       <p>Dernière photo de cette impressionante forteresse des Pyérénées Orientales.</p>
                      </Panel>
                </Panel>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    "@media (min-width: 600px)":{
    container: {
        width:'78%',
        padding: "20px",
        display: "flex",
        margin: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
    },
    containercard:{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "auto",
        padding: "20px",
    },
    card:{
        boxShadow: '8px 8px 10px 0 rgba(0,0,0,0.5)',
        width: "400px",
        marginRight: '60px',
        marginBottom:'60px',
        backgroundColor:'white' 
    },
    },
})

export default Salses;