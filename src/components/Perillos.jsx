import React from 'react';
import { Panel } from 'rsuite';

import { StyleSheet, css } from 'aphrodite';

const Perillos = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Perillos</h1>
            <h4>(visite du 9 mars 2019)</h4>
                <div>
                    <Panel header="PERILLOS">
                        <p><a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/For%C3%A7a_R%C3%A9al">Perillos</a> est une ancienne commune des pyrénées Orientales.
                       Les habitants de Perillos auraient abandonné le village en 1970, et depuis 1972 le village est rattaché à Opoul pour former la commune d'
                       <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Opoul-P%C3%A9rillos">Opoul-Périllos</a>.</p>
                        <p>Mais depuis 2006, une association redonne vie à ce village abandonné, pour sauver les ruines de l'abandon. Par conséquent, le village est en reconstruction,
                            autour de l'<a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Michel_de_P%C3%A9rillos">église Saint Michel</a> plutôt bien conservé.</p>
                        <p>C'est une magnifique découverte, avec beaucoup de chemin de randonnée. Nous avons pris le fourgon pour aller au village qui est à 6 km des ruines du château avec des routes bien étroite, mais notre fourgon est passé 😀.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/P%C3%A9rillos,+66600+Opoul-P%C3%A9rillos/@42.8970282,2.8294434,14z/data=!3m1!4b1!4m5!3m4!1s0x12b0414ff127a1ff:0x4594d72eef58bb31!8m2!3d42.89703!4d2.846953">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Perillos/perillos1.jpg" height="350" width="400" alt="Ruines du château"/>
                     <Panel>
                        <p>En partant à l'aventure, nous sommes tombés sur des ruines d'un château.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Perillos/perillos2.jpg" height="350" width="400" alt="Ruines du château de Perillos"/>
                     <Panel>
                        <p>Nous avons garé le camion au parking, on monte admirer ces ruines.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Perillos/perillos3.jpg" height="350" width="400" alt="Les remparts du château"/>
                     <Panel>
                      <p>Spectacle extraordinaire, avec ce qu'il reste des remparts.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Perillos/perillos4.jpg" height="350" width="400" alt="Une tour du château de Perillos"/>
                     <Panel>
                      <p>On avance et on continu de découvrir des ruines.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Perillos/perillos5.jpg" height="350" width="400" alt="Ruines du château" />
                     <Panel>
                      <p>Les pierres et la nature, que demander de plus c'est magnifique.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Perillos/perillos6.jpg" height="350" width="400" alt="Des ruines"/>
                      <Panel>
                       <p>Toujours au château, on peut voir les ruines d'une pièce.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Perillos/perillos7.jpg" height="350" width="400" alt="Les ruines du château de Perillos"/>
                     <Panel>
                      <p>Autre vue sur les ruines, nous pouvons voir les restes d'une fenêtre.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Perillos/perillos8.jpg" height="350" width="400" alt="Vue sur le paysage"/>
                     <Panel>
                      <p>Vue sur la mer et l'étang de Port Leucate et de Le Barcarès.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Perillos/perillos9.jpg" height="350" width="400" alt="Zoom sur la mer" />
                      <Panel>
                       <p>Zoom sur Port Barcarès, nous pouvons apercevoir le Lydia à droite.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Perillos/perillos10.jpg" height="350" width="400" alt="Village abandonné" />
                      <Panel>
                        <p>Nous avons repris le camion et direction le village (route étroite).</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Perillos/perillos11.jpg" height="350" width="400" alt="Ruine d'une voûte" />
                      <Panel>
                       <p>Ruines d'une voute, peut être que c'était l'entrée du village .</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Perillos/perillos12.jpg" height="350" width="400" alt="L'église de Perillos" />
                      <Panel>
                       <p>L'église de ce village à découvrir avec plein de chemin de randonnée.</p>
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

export default Perillos;