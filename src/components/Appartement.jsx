import React from 'react';
import { Panel } from 'rsuite';
import { StyleSheet, css } from 'aphrodite';



const Appartement = () => {
    return (
        <div className= {css(styles.container)}>
        <h1>L'appartement</h1>
            <div>
                <Panel header="" >
                    <p></p>
                </Panel>
               
            </div>
        <div className={css(styles.containercard)}>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart.jpg" height="500" width="400" alt="salle à manger" />
                 <Panel header="Le coin repas">
                 </Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart0.jpg" height="500" width="400" alt="vue sur la mer" />
                 <Panel header="Vue sur la mer de l'appartement">
                 </Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart1.jpg" height="500" width="400" alt="cuisine" />
                 <Panel header="La cuisine">
                 </Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart2.jpg" height="500" width="400" alt="salon" />
                 <Panel header="Autre vue du salon">
                 </Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart3.jpg" height="500" width="400" alt="le salon" />
                 <Panel header="Le salon (vur de la cuisine)">
                 </Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart4.jpg" height="500" width="400" alt="port de la chambre et cabine" />
                 <Panel header="L'accès à la chambre et à la cabine">
                 </Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart5.jpg" height="500" width="400" alt="la cabine" />
                 <Panel header="La cabine (avec un lit supperposé)">
                 </Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart6.jpg" height="500" width="400" alt="la chambre" />
                 <Panel header="la chambre">
                 </Panel>
            </Panel>
            <Panel className={css(styles.card)} shaded bordered bodyFill>
                <img src="/assets/Appartement/appart7.jpg" height="500" width="400" alt="salle d'eau" />
                 <Panel header="La salle d'eau">
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
    fontSize: "1rem"
}
}
})

export default Appartement;