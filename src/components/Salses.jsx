import React from 'react';
import { Panel } from 'rsuite';

import { StyleSheet, css } from 'aphrodite';

const Salses = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Salses le Château</h1>
            <h4>(visite du 8 mars 2019)</h4>
                <div>
                    <Panel header="LA FORTERESSE DE SALSES LE CHÂTEAU">
                        <p>Commune des <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pyr%C3%A9n%C3%A9es-Orientales">Pyrénées Orientales</a>, 
                        <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Salses-le-Ch%C3%A2teau"> Salses le Château</a> possède une forteresse construite par les espagnols en 1502
                            pour protéger la frontières. Proche de Le Barcarès, une visite qui peut être faite
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
                     <Panel>
                        <p>Proche de Barcarès la forteresse de Salses le Château.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse2.jpg" height="350" width="400" alt="Salses le château"/>
                     <Panel>
                        <p>Impressionante forteresse a visiter, accéssible pour toute la famille.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse3.jpg" height="350" width="400" alt="L'entrée de la forteresse"/>
                     <Panel>
                      <p>Nous nous rapprochons de l'entrée de la Forteresse.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse4.jpg" height="350" width="400" alt="L'entrée de la Forteresse" />
                     <Panel>
                      <p>Extraordinaire entrée, de brique rouque et des moulures magnifique.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse5.jpg" height="350" width="400" alt="Une tours de la forteresse" />
                     <Panel>
                      <p>Sur cette photo, on peut voir une tour et un bout des remparts.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse6.jpg" height="350" width="400" alt="Les remparts de Salses le château"/>
                      <Panel>
                       <p>Photo prise de l'entrée, montrant les impressionants remparts.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse7.jpg" height="350" width="400" alt="Remparts et une tour"/>
                     <Panel>
                      <p>Le coté gauche des remparts avec une tour, toujours à l'entrée.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Salses/salse8.jpg" height="350" width="400" alt="Plan de la forteresse" />
                     <Panel>
                      <p>Photo d'un plan de la forteresse, pour avoir un petit aperçu.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Salses/salse9.jpg" height="350" width="400" alt="Vue de haut des remparts" />
                      <Panel>
                       <p>Nous montons plus haut plus découvrir cette forteresse .</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Salses/salse10.jpg" height="350" width="400" alt="Vue sur l'entrée de la forteresse" />
                      <Panel>
                        <p>Magnifique vue sur les pierres de la forteresse, vue sur l'entrée.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Salses/salse11.jpg" height="350" width="400" alt="La Cour de la forteresse" />
                      <Panel>
                       <p>Nous arrivons sur la place d'arme et il y a des salles à visiter.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Salses/salse12.jpg" height="350" width="400" alt="Salses le château" />
                      <Panel>
                       <p>Dernière photo de cette forteresse des Pyérénées Orientales.</p>
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
        marginTop: "40px"
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

export default Salses;