import React from 'react';
import { Panel } from 'rsuite';

import { StyleSheet, css } from 'aphrodite';

const ForcaReal = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Força Réal</h1>
            <h4>(visite du 28 avril 2019)</h4>
                <div>
                    <Panel header="Força Réal">
                        <p>Força Réal est sur le sommet d'un piton rocheux, à 507m d'altitude. Près de Millas, il constitue 
                            un formifables belvédère sur le Roussillon, avec un superbe panorama à 360° sur la région.</p>
                        <p>L'antenne relais domine la plaine du Roussillon. Elle est placée à 500 mètres d'altitude. Tandis que l'ermitage,
                             lui est construit sur les ruines de la forteresse royale des rois d'Aragon et de Majorque. Il semblerait que c'est 
                             en 1963 que le château fut détruit et remplacé par l'ermitage.</p>
                        <p>Nous profitons également d'un somptueux panorama sur le Mont Canigou qui culmine à 2 784 mètres d'altitude. Célèbre sommet
                             chez les Catalans, il abrite l'abaye de Saint Martin du Canigou, mais aussi ce lieu héberge de nombreux sentiers de randonnées.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://goo.gl/maps/Q8DW9LW8ibF93cJK8">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/ForcaReal/força1.jpg" height="350" width="400" alt="Paysage du Roussillon" />
                     <Panel header="PAYSAGE DU ROUSSILLON">
                        <p>Arrivée au parking, nous avons un panora magnifique sur le Roussillon.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/ForcaReal/força2.jpg" height="350" width="400" alt="Paysage du Roussillon"/>
                     <Panel header ="AUTRE VUE DU PARKING">
                        <p>Impréssionnant paysage, on en prend plein les yeux.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/ForcaReal/força3.jpg" height="350" width="400" alt="L'ermitage"/>
                     <Panel header="L'ERMITAGE">
                      <p>Après un petit de marche, nous arrivons à l'Ermitage.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/ForcaReal/força4.jpg" height="350" width="400" alt="Autre vue de l'ermitage" />
                     <Panel header="AUTRE VUE DE L'ERMITAGE">
                      <p>Batîsse magnifique, avec tous autour un panorama extraordinaire.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/ForcaReal/força5.jpg" height="350" width="400" alt="Antenne relais de Força Réal" />
                     <Panel header="ANTENNE RELAIS">
                      <p>Nous partons de l'autre coté pour se rapprocher de l'antenne relais.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/ForcaReal/força6.jpg" height="350" width="400" alt="Vue de l'ermitage"/>
                      <Panel header="L'ERMITAGE ET LE PAYSAGE">
                       <p>Voici une photo de l'ermitage dans un cadre magnifique (vue de l'antenne relais).</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/ForcaReal/força7.jpg" height="350" width="400" alt="Le mont Canigou"/>
                     <Panel header="LE MONT CANIGOU">
                      <p>Vue sur les pyrénées avec le Mont Canigou (vue de l'antenne relais).</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/ForcaReal/força8.jpg" height="350" width="400" alt="Paysage" />
                     <Panel header="COTE MEDITERRANEE">
                      <p>Autre paysage avec en arrière plan la méditérranée.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/ForcaReal/força9.jpg" height="350" width="400" alt="Vue de haut des remparts" />
                      <Panel header="LES REMPARTS">
                       <p>Un parc d'héolienne avec au loin la mer méditéranée avec Le Barcarès et Leucate.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/ForcaReal/força11.jpg" height="350" width="400" alt="Paysage du Rousillon" />
                      <Panel header="PANORAMA SUR LA VALLEE DU ROUSILLON">
                        <p>Extraordinaire paysage sur la vallée du Rousillon, spot super pouer les photographes.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/ForcaReal/força10.jpg" height="350" width="400" alt="Paysage du Rousillon" />
                      <Panel header="PETIT ZOOM">
                       <p>J'ai zoomé un peu pour admirer ce payage magnifique.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/ForcaReal/força12.jpg" height="350" width="400" alt="Le mont Canigou" />
                      <Panel header="LE CANIGOU">
                       <p>Pour finir, une autre photo du Mont Canigou avec un peu de neige.</p>
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

export default ForcaReal;