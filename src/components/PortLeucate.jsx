import React from 'react';
import { Panel } from 'rsuite';
import { StyleSheet, css } from 'aphrodite';

const PortLeucate = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Leucate</h1>
                <div>
                    <Panel header="LEUCATE VILLAGE - LEUCATE PLAGE - PORT LEUCATE">
                        <p>Nous sommes allés découvrir le village de <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tautavel">Tautavel</a> dans les 
                        <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pyr%C3%A9n%C3%A9es-Orientales"> Pyrénées Orientales</a>, de 878 habitants
                        à 40 minutes de Le Barcarès. Cette commune fait partie de la route des vins.</p>
                        <p>Vous y trouverez le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Mus%C3%A9e_de_Tautavel_-_Centre_europ%C3%A9en_de_pr%C3%A9histoire">musée de préhistoire</a> qui vous fera voyager dans le passé avec 700 000 ans de présence humaine.
                        Des parcours de randonnée pour y découvrir des lieux comme le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Tautavel">château de Tautavel</a> en ruines, la <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tour_del_Far">Torre del far </a>
                        mais également des grottes accessibles à pied.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/Leucate/@42.9075769,2.9531611,12z/data=!3m1!4b1!4m5!3m4!1s0x12b0595177db187f:0x4078821166d2750!8m2!3d42.9103039!4d3.028163">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/village.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/village1.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/village2.jpg" height="350" width="400" alt="le port"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
            </div>
            <div>
                    <Panel header="LE CHÂTEAU DE LEUCATE VILLAGE">
                        <p>Nous sommes allés découvrir le village de <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tautavel">Tautavel</a> dans les 
                        <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pyr%C3%A9n%C3%A9es-Orientales"> Pyrénées Orientales</a>, de 878 habitants
                        à 40 minutes de Le Barcarès. Cette commune fait partie de la route des vins.</p>
                        <p>Vous y trouverez le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Mus%C3%A9e_de_Tautavel_-_Centre_europ%C3%A9en_de_pr%C3%A9histoire">musée de préhistoire</a> qui vous fera voyager dans le passé avec 700 000 ans de présence humaine.
                        Des parcours de randonnée pour y découvrir des lieux comme le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Tautavel">château de Tautavel</a> en ruines, la <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tour_del_Far">Torre del far </a>
                        mais également des grottes accessibles à pied.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/Leucate/@42.9075769,2.9531611,12z/data=!3m1!4b1!4m5!3m4!1s0x12b0595177db187f:0x4078821166d2750!8m2!3d42.9103039!4d3.028163">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau1.jpg" height="350" width="400" alt="château de Leucate" />
                     <Panel header="LE CHÂTEAU DE LEUCATE">
                        <p>Les ruines du château de Leucate avec en arrière plan l'étang de Leucate</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau2.jpg" height="350" width="400" alt="ruines du château"/>
                     <Panel header ="LES RUINES DU CHÂTEAU">
                        <p>Nous nous sommes rapprochés des ruines pour admirer ces magnifiques vestiges.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau3.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="LES RUINES">
                      <p>Nous arrivons sur les restes d'un escalier et d'un porche.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau4.jpg" height="350" width="400" alt="ruines et etang" />
                     <Panel header="RUINES ET ETANG">
                        <p>Superbe paysage avec les ruines et en arrière plan l'étang de Leucate</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau5.jpg" height="350" width="400" alt="l'étang"/>
                     <Panel header ="L'ETANG DE LEUCATE">
                        <p>Vue sur l'étang de Leucate et les montagnes en arrière plan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau6.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="RUINES DU CHÂTEAU">
                      <p>Magnifique vestiges d'une pièces voutée du château.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau7.jpg" height="350" width="400" alt="escalier en pierre" />
                     <Panel header="ON CONTINUE">
                        <p>Des escaliers de pierres magnifiques, dans un cadre naturel super agréable.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau8.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="STATUETTE DE Françoise de Cezelly">
                        <p>En continuant notre balade, nous arrivons sur cette statue.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau9.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="CHEMIN DE RANDONNEE">
                      <p>Tout autour de Leucate village, beaucoup de chemin comme celui-ci pour admirer le paysage.</p>
                     </Panel>
                </Panel>
            </div>

            <div>
                    <Panel header="LES FALAISES A LEUCATE PLAGE">
                        <p>Nous sommes allés découvrir le village de <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tautavel">Tautavel</a> dans les 
                        <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pyr%C3%A9n%C3%A9es-Orientales"> Pyrénées Orientales</a>, de 878 habitants
                        à 40 minutes de Le Barcarès. Cette commune fait partie de la route des vins.</p>
                        <p>Vous y trouverez le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Mus%C3%A9e_de_Tautavel_-_Centre_europ%C3%A9en_de_pr%C3%A9histoire">musée de préhistoire</a> qui vous fera voyager dans le passé avec 700 000 ans de présence humaine.
                        Des parcours de randonnée pour y découvrir des lieux comme le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Tautavel">château de Tautavel</a> en ruines, la <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tour_del_Far">Torre del far </a>
                        mais également des grottes accessibles à pied.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/Leucate/@42.9075769,2.9531611,12z/data=!3m1!4b1!4m5!3m4!1s0x12b0595177db187f:0x4078821166d2750!8m2!3d42.9103039!4d3.028163">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise1.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise2.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise3.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise4.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise5.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise6.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise7.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise8.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise9.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
            </div>
            
            <div>
                    <Panel header="LE VILLAGE DES PÊCHEURS A PORT LEUCATE">
                        <p>Nous sommes allés découvrir le village de <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tautavel">Tautavel</a> dans les 
                        <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pyr%C3%A9n%C3%A9es-Orientales"> Pyrénées Orientales</a>, de 878 habitants
                        à 40 minutes de Le Barcarès. Cette commune fait partie de la route des vins.</p>
                        <p>Vous y trouverez le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Mus%C3%A9e_de_Tautavel_-_Centre_europ%C3%A9en_de_pr%C3%A9histoire">musée de préhistoire</a> qui vous fera voyager dans le passé avec 700 000 ans de présence humaine.
                        Des parcours de randonnée pour y découvrir des lieux comme le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Tautavel">château de Tautavel</a> en ruines, la <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tour_del_Far">Torre del far </a>
                        mais également des grottes accessibles à pied.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/Leucate/@42.9075769,2.9531611,12z/data=!3m1!4b1!4m5!3m4!1s0x12b0595177db187f:0x4078821166d2750!8m2!3d42.9103039!4d3.028163">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur1.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur2.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur3.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur4.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur5.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur6.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur7.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur8.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur9.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
            </div>

            <div>
                    <Panel header="LES PLAGES DE PORT LEUCATE">
                        <p>Nous sommes allés découvrir le village de <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tautavel">Tautavel</a> dans les 
                        <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Pyr%C3%A9n%C3%A9es-Orientales"> Pyrénées Orientales</a>, de 878 habitants
                        à 40 minutes de Le Barcarès. Cette commune fait partie de la route des vins.</p>
                        <p>Vous y trouverez le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Mus%C3%A9e_de_Tautavel_-_Centre_europ%C3%A9en_de_pr%C3%A9histoire">musée de préhistoire</a> qui vous fera voyager dans le passé avec 700 000 ans de présence humaine.
                        Des parcours de randonnée pour y découvrir des lieux comme le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Tautavel">château de Tautavel</a> en ruines, la <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Tour_del_Far">Torre del far </a>
                        mais également des grottes accessibles à pied.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/Leucate/@42.9075769,2.9531611,12z/data=!3m1!4b1!4m5!3m4!1s0x12b0595177db187f:0x4078821166d2750!8m2!3d42.9103039!4d3.028163">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent1.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent2.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent3.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent4.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent5.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent6.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent7.jpg" height="350" width="400" alt="leucate" />
                     <Panel header="LEUCATE VILLAGE et LEUCATE PLAGE">
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent8.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel header ="LEUCATE VILLAGE">
                        <p>Vue de Leucate village, elle a été prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent9.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel header="PORT LEUCATE">
                      <p>Vue du Port de Leucate, elle a été prise du pont qui mêne à Perpignan.</p>
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

export default PortLeucate;