import React from 'react';
import { Panel } from 'rsuite';

import { StyleSheet, css } from 'aphrodite';

const Collioure = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Collioure</h1>
            <h4>(visite du 29 mai 2019)</h4>
                <div>
                    <Panel header="Collioure">
                        <p>Commune Française au bord de la méditérannée, <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Collioure">Collioure </a>
                         est l'une des villes des <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pyr%C3%A9n%C3%A9es-Orientales">Pyrénées Orientales </a>
                        les plus touristique. En effet elle possède de nombreux monuments historiques sur son territoire mais aussi
                            des plages de galets ainsi que plusieurs chemins de randonnées. Collioure est à environ 45 min de Le Barcarès.</p>
                        <p>La ville est constituée du <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Ch%C3%A2teau_royal_de_Collioure">château royale </a> qui existait déjà depuis 673 et qui par la suite, abrita les <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Royaume_d%27Aragon">rois d'Aragon </a> 
                        puis <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Royaume_de_Majorque">rois de Majorque</a>.</p>
                        <p>La chapelle Saint Vincent de Collioure fur construite en 1642 et servait d'ermitage. D'ailleurs sur les anciennes cartes c'était une île qui de nos jours est reliée par une digue.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://goo.gl/maps/rW98wKVR6Y1ajgQp9">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Collioure/collioure1.jpg" height="350" width="400" alt="Château et église de Collioure" />
                     <Panel header="EGLISE ET LE CHÂTEAU DE COLLIOURE">
                        <p>Petite vue sur le château royale, la mer et l'église Notre Dame des Anges.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Collioure/collioure2.jpg" height="350" width="400" alt="Collioure"/>
                     <Panel header ="VILLE MAGNIFIQUE">
                        <p>Vue de Collioure en arrière plan et de la mer avec quelques rochers et bateaux.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Collioure/collioure3.jpg" height="350" width="400" alt="Collioure"/>
                     <Panel header="AUTRE PARTIE">
                      <p>Coin magnifique où nous pouvons y trouver des restaurants avec des terrasses vue sur la mer.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Collioure/collioure4.jpg" height="350" width="400" alt="Le château royale de Collioure" />
                    <Panel header="LES REMPARTS DU CHÂTEAU ROYALE">
                      <p>Petit passage obligatoire du coté du château royale de Collioure.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Collioure/collioure5.jpg" height="350" width="400" alt="château royale" />
                     <Panel header="AUTRE VUE DU CHÂTEAU">
                      <p>Nous continuons notre petit tour autour de ce château Impréssionnant.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Collioure/collioure6.jpg" height="350" width="400" alt="Chapelle St Vincent"/>
                      <Panel header="CHAPELLE ST VINCENT">
                       <p>Nous avons une plagette et nous pouvons accéder à la petite chapelle St Vincent.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Collioure/collioure7.jpg" height="350" width="400" alt="La plage de collioure"/>
                     <Panel header="LA PLAGE PRINCIPALE">
                      <p>Plage située au centre de Collioure et en arrière plan nous apercevons le fort St Elmes.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Collioure/collioure8.jpg" height="350" width="400" alt="Le fort st Elmes" />
                     <Panel header="LE FORT ST ELMES">
                      <p>Un zoom sur le fort St Elmes, nous n'y sommes pas allés mais on y retournera</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Collioure/collioure9.jpg" height="350" width="400" alt="Le port de Collioure" />
                      <Panel header="LE PORT DE COLLIOURE">
                       <p>Voici le port de Collioure qui est également proche du centre .</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Collioure/collioure10.jpg" height="350" width="400" alt="Le fort Miradou" />
                      <Panel header="LE FORT MIRADOU">
                        <p>Photo sur le fort Miradou en premier plan et sur la ville de Collioure.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Collioure/collioure11.jpg" height="350" width="400" alt="Le fort carré de Collioure" />
                      <Panel header="LE FORT CARRE">
                       <p>Le fort carré est entouré d'un profond fossé creusé dans la roche.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Collioure/collioure12.jpg" height="350" width="400" alt="La tour de l'étoile" />
                      <Panel header="LA TOUR DE L'ETOILE">
                       <p>Au pied de la tour de l'Étoile sont disposés deux remparts en équerre.</p>
                      </Panel>
                </Panel>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
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
    lienText:{
        fontSize: '1rem',
    }
})
export default Collioure;