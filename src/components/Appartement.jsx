import React from 'react';
import { Panel } from 'rsuite';
import { StyleSheet, css } from 'aphrodite';



const Appartement = () => {
    return (
        <div className= {css(styles.container)}>
        <h1>L'appartement et ses alentours</h1>
            <div>
                <Panel header="NOTRE APPARTEMENT" >
                    <p>Notre location, un appartement T2 cabine vue mer situé à la grande plage de Le Barcarès dans la résidence Front de Mer. L'appartement pour la location
                        saisonnières se trouve du coté jardin avec une vue latérale sur la mer au 2 ème étage.</p>
                    <p>Etant du coté jardin, il n'y a aucune nuisance sonore dù aux commerces. Le logement est baigné de soleil jusqu'a 9 heures du matin (orienté Nord Est),
                        ce qui évite les fortes chaleurs qui empêchent de dormir la nuit.</p>
                    <p>On peut voir un vis à vis sur l'immeuble voisin mais non dérangeant pour la vue car l'appartement est en biais en direction de la mer. Idéal pour les petits
                        déjeuners avec vue mer.</p>
                </Panel>
               
            </div>
        <div className={css(styles.containercard)}>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart.jpg" height="500" width="400" alt="salle à manger" />
                 <Panel header="Le coin repas"></Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart0.jpg" height="500" width="400" alt="vue sur la mer" />
                 <Panel header="Vue sur la mer de l'appartement"></Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart1.jpg" height="500" width="400" alt="cuisine" />
                 <Panel header="La cuisine"></Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart2.jpg" height="500" width="400" alt="salon" />
                 <Panel header="Autre vue du salon"></Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart3.jpg" height="500" width="400" alt="le salon" />
                 <Panel header="Le salon (vur de la cuisine)"></Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart4.jpg" height="500" width="400" alt="port de la chambre et cabine" />
                 <Panel header="L'accès à la chambre et à la cabine"></Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart5.jpg" height="500" width="400" alt="la cabine" />
                 <Panel header="La cabine (avec un lit supperposé)"></Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart6.jpg" height="500" width="400" alt="la chambre" />
                 <Panel header="la chambre"></Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart7.jpg" height="500" width="400" alt="salle d'eau" />
                 <Panel header="La salle d'eau"></Panel>
            </Panel>
        </div>
        <div>
                <Panel header="AUTOUR DE L'APPARTEMENT">
                    <p>La résidence est au niveau de la place du Tertre, à Le Barcarès. juste en bas de la résidence, on y trouve tous les commerces:
                        une boulangerie, une épicerie, des restaurants, des glaciers, des pizzerias, des traiteurs, magasin de plage et souvenirs, magasin d'habillement...mais aussi une fête foraine.</p>
                    <p>La résidence possède un parking privé et fermé par une barrière avec un grand nombre de places non attitrées. Ceci permet de ce garer où l'on veut.</p>
                    <p>Elle est situé également non loin (100 m) du paquebot "Le Lydia" qui est visitable, il y a aussi des animations. Pour aller au Lydia, on longe l'Allée des Arts,
                        au bord de la mer. On y trouve une collection de sculptures contemporaines exposée tout au long de l'allée.</p>
                </Panel>
               
            </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Appartement/alentour1.jpg" height="350" width="400" alt="Résidence Front de mer" />
                     <Panel header="Résidence coté jardin, coté plage"></Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Appartement/alentour2.jpg" height="350" width="400" alt="Accés à la plage"/>
                     <Panel header ="Accès à la plage et poste de secours"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Appartement/alentour3.jpg" height="350" width="400" alt="Allée des Arts"/>
                     <Panel header="Allée des Arts coté gauche"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Appartement/alentour4.jpg" height="350" width="400" alt="Allée des Arts" />
                    <Panel header="Allée des Arts coté droit"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Appartement/alentour5.jpg" height="350" width="400" alt="Une oeuvre de l'allée des arts"/>
                     <Panel header="Une oeuvre de l'allée des Arts"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Appartement/alentour6.jpg" height="350" width="400" alt="Le Lydia et la place des Totems"/>
                      <Panel header="Le Lydia et la place des Totems"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Appartement/alentour7.jpg" height="350" width="400" alt="Restaurants et glaciers"/>
                     <Panel header="Restaurants, glaciers (coté plage)"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Appartement/alentour8.jpg" height="350" width="400" alt="Place du Tertre" />
                     <Panel header="Place du Tertre (plusieurs commerces)"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Appartement/alentour9.jpg" height="350" width="400" alt="Restaurants" />
                      <Panel header="Restaurants, pizzeria (coté place du Tertre)"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Appartement/alentour10.jpg" height="350" width="400" alt="Parking de la résidence" />
                      <Panel header="Le parking fermé de la Résidence"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Appartement/alentour11.jpg" height="350" width="400" alt="Le parking" />
                      <Panel header="L'entrée du parking"></Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                     <img src="/assets/Appartement/alentour12.jpg" height="350" width="400" alt="Terrain de pétanque" />
                      <Panel header="Terrain de pétanque (à coté du parking)"></Panel>
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
    fontSize: "1rem"
}
}
})

export default Appartement;