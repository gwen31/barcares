import React from 'react';
import { Panel } from 'rsuite';

import { StyleSheet, css } from 'aphrodite';

const Eus = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Eus</h1>
            <h4>(visite du 24 octobre 2019)</h4>
                <div>
                    <Panel header="LE VILLAGE D'EUS">
                        <p>Nous sommes allés découvrir le village d' <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Eus">Eus</a>. 
                        Il est situé entre la vallée du Conflent et le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pic_du_Canigou">Mont Canigou</a>, dans les pyrénées Orientales. Cet ancien site 
                        défensif eut à repousser les Français au XVI ème siècle et l'armée Espagnole au XVIII ème siècle.</p>
                        <p>Village a été classé parmi les plus beau village de France, village de pierres atypique, avec de magnifique ruelle et des chemins de randonnées pour y découvrir d'autres villages comme l'ancien village de 
                        <a className={css(styles.lienText)} href="https://www.les-pyrenees-orientales.com/Villages/Comes.php"> Cômes</a>, maintenant en ruines.</p>                        
                        <p>C'est un magnifique village perché sur une colline avec à son sommet l'<a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Vincent-d%27En-Haut_d%27Eus">Eglise Saint-Vincent-d'En-Haut</a> qui est une église du XVIII ème siècle et situé à l'emplacement de l'ancien château.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/66500+Eus/@42.6357601,2.4182182,12.5z/data=!4m5!3m4!1s0x12affd6e55d80c19:0x407882116676b80!8m2!3d42.6447999!4d2.456519?hl=fr">
                        <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Eus/eus1.jpg" height="350" width="400" alt="le village" />
                     <Panel header="LE VILLAGE D'EUS">
                        <p>Vu sur le magnifique village d'Eus situé tout en haut d'une colline.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Eus/eus2.jpg" height="350" width="400" alt="Le mont canigou"/>
                     <Panel header ="LE MONT CANIGOU">
                        <p>Magnifique vu sur le Mont Canigou, le village est situé face à ce mont.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Eus/eus3.jpg" height="350" width="400" alt="L'entrée du village"/>
                     <Panel header="L'ENTREE DU VILLAGE">
                      <p>C'est l'entrée, nous nous sommes garé sur un petit parking.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Eus/eus4.jpg" height="350" width="400" alt="Maison du village" />
                     <Panel header="MAISON EN PIERRES">
                      <p>Lorsque on arrive, nous découvons de belle bâtisse en pierres.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Eus/eus5.jpg" height="350" width="400" alt="Ruines du château" />
                     <Panel header="L'EGLISE SAINT-VINCENT-D'EN-HAUT">
                      <p>Nous commençons à voir l'impressionnante Eglise Saint-Vincent d'Eus.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Eus/eus6.jpg" height="350" width="400" alt="ruelle du village"/>
                      <Panel header="RUELLE DU VILLAGE">
                       <p>Vu d'une petite ruelle de galet et des maisons en pierres.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Eus/eus7.jpg" height="350" width="400" alt="ruines"/>
                     <Panel header="RUINES">
                      <p>Au fur et à mesure que nous avançons, nous découvrons les ruines d'une bâtisse.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Eus/eus8.jpg" height="350" width="400" alt="ruines" />
                     <Panel header="RUINES DU CHÂTEAU">
                      <p>Nous arrivons en haut du village et nous y découvrons les reste du château.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Eus/eus9.jpg" height="350" width="400" alt="une place du village" />
                      <Panel header="ESPACE DETENTE">
                       <p>Magnifique endroit agréable, il y a même un olivier.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Eus/eus10.jpg" height="350" width="400" alt="place autour de l'Eglise"/>
                      <Panel header="AUTOUR DE L'EGLISE">
                        <p>Nous sommes arrivés à l'Eglise Saint-Vincent-d'En-Haut.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Eus/eus11.jpg" height="350" width="400" alt="chemin de rendonnée" />
                      <Panel header="CHEMIN DE RANDONNEE">
                       <p>Derrière l'Eglise, chemin de randonnée qui même au village abandonnée de Cômes.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Eus/eus12.jpg" height="350" width="400" alt="Le village" />
                      <Panel header="EUS">
                       <p>Dernière petite vue sur ce impressionnant village.</p>
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

export default Eus;

