import React from 'react';
import { Panel } from 'rsuite';
import { StyleSheet, css } from 'aphrodite';
import "../styles/setting.css";

const PortLeucate = () => {
    return (
        <div className= {css(styles.container)}>
            <h1>Leucate</h1>
                <div>
                    <Panel header="LEUCATE VILLAGE - LEUCATE PLAGE - PORT LEUCATE">
                        <p>A <a className={css(styles.lienText)} href="https://www.tourisme-leucate.fr/">Leucate</a>, on peut y découvrir beaucoup d'endroit magnifique, il n'y a pas que la mer méditerranée.</p> 
                        <p>A Leucate Village, en plus du village avec ces boutiques et marchés, il y a le château de Leucate et plein de chemin de randonnée avec des vue magique.</p>
                        <p>A Leucate plage, on y trouve en plus des plages, la falaise avec de nombreux chemin de randonnées,des vestiges de la seconde guerre mondiale et des panoramas extraordinaires mais aussi des petites plagettes agréables.</p>
                        <p>A Port Leucate, en plus d'un port très animé, on peut découvrir sur les plages le Ponton, un miroir d'eau mais également une fête foraine (ouverte que l'été) et un casino pour passer de bonne soirée.</p>
                        <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/Leucate/@42.9075769,2.9531611,12z/data=!3m1!4b1!4m5!3m4!1s0x12b0595177db187f:0x4078821166d2750!8m2!3d42.9103039!4d3.028163">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/village.jpg" height="350" width="400" alt="leucate" />
                     <Panel>
                        <p>Vue sur Leucate Village en premier plan et en arrière plan Leucate Plage</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/village1.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel>
                        <p>Vue de Leucate village, photo prise du d'en haut du village, coté château .</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/village2.jpg" height="350" width="400" alt="le port"/>
                     <Panel>
                      <p>Vue sur Port de Leucate, magnifique port très animé.</p>
                     </Panel>
                </Panel>
            </div>
            <div>
                    <Panel header="LEUCATE VILLAGE : Le Château">
                        <p>A Leucate village, on y trouve le <a className={css(styles.lienText)} href="https://fr.wikipedia.org/wiki/Fort_de_Leucate">château de Leucate</a>, il est situé en haut du village
                        et il est accéssible en voiture, à pied ou en vélo.</p>
                        <p>C'est une balade que l'on peut faire toute l'année, on peut admirer les vestiges du château mais également admirer des paysages magnifique sur l'étang, le parc à huitres et sur les Corbières.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/search?client=ubuntu&hs=mna&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=APq-WBvgtkTqDsxlf1-gtbhQL6IhCL1b5w:1646734718902&q=le+ch%C3%A2teau+de+leucate&rflfq=1&num=10#rlfi=hd:;si:;mv:[[43.0779518,3.1277258999999997],[42.4944503,2.3239921]]">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau1.jpg" height="350" width="400" alt="château de Leucate" />
                     <Panel>
                        <p>Les ruines du château de Leucate avec en arrière plan l'étang de Leucate</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau2.jpg" height="350" width="400" alt="ruines du château"/>
                     <Panel>
                        <p>On se rapproche des ruines pour admirer ces magnifiques vestiges.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau3.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel>
                      <p>Nous arrivons sur les restes d'un escalier et d'un porche.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau4.jpg" height="350" width="400" alt="ruines et etang" />
                     <Panel>
                        <p>Superbe paysage avec les ruines et en arrière plan l'étang de Leucate</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau5.jpg" height="350" width="400" alt="l'étang"/>
                     <Panel>
                        <p>Vue sur l'étang de Leucate et les montagnes en arrière plan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau6.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel>
                      <p>Magnifique vestiges d'une pièces voutée du château.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau7.jpg" height="350" width="400" alt="escalier en pierre" />
                     <Panel>
                        <p>Des escaliers de pierres magnifiques, dans un cadre naturel super agréable.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau8.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel>
                        <p>En continuant, on découvre la statuette de Françoise de Cezelly.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/chateau9.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel>
                      <p>Tout autour de Leucate village, beaucoup de chemin comme celui-ci.</p>
                     </Panel>
                </Panel>
            </div>

            <div>
                <Panel header="LEUCATE PLAGE : La Falaise (cap Leucate)">
                    <p>La falaise est situé à Leucate plage, cette endroit est appelé <a className={css(styles.lienText)} href="https://www.google.com/search?q=Cap+Leucate&oq=cap&aqs=chrome.1.69i57j69i59j0i67j0i67i433j46i67j0i67l3j46i199i465i512j46i67i175i199.3056j0j15&client=ubuntu&sourceid=chrome&ie=UTF-8">Cap Leucate</a>. 
                    C'est un site naturel avec un panorama impressionnant sur la côte du Cap Creus jusqu'a Sète.</p>
                    <p>Il y a des chemins de randonnée pour admirer ce paysage qui longe la falaise jusqu'à <a className={css(styles.lienText)} href="https://www.tourisme-leucate.fr/decouvrir/leucate-en-mediterranee/les-villages/la-franqui/">la Franqui</a> par exemple.
                    Lors des rendonnées, on peut y découvrir des vestiges des abris et des bunkers de la seconde guerre mondiale.</p>
                    <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/search?client=ubuntu&hs=eMv&tbs=lf:1,lf_ui:1&tbm=lcl&sxsrf=APq-WBtmgc3FL4K9Wpvz7Orp_HJey3WLoA:1646734319584&q=la+falaise+de+leucate&rflfq=1&num=10#rlfi=hd:;si:;mv:[[42.9380813,3.0620562],[42.883032899999996,3.0304306999999997]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:1">
                        <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                </Panel>
            </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise1.jpg" height="350" width="400" alt="leucate plage" />
                     <Panel>
                        <p>Jolie panarama de Leucate plage, photo prise de Cap Leucate.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise2.jpg" height="350" width="400" alt="Falaise de Leucate"/>
                     <Panel>
                        <p>Les falaises de Leucate pour admirer un panorama magnifique.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise3.jpg" height="350" width="400" alt="Des ruines"/>
                     <Panel>
                      <p>On découvre des ruines de batiments sur notre chemin.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise4.jpg" height="350" width="400" alt="Des ruines" />
                     <Panel>
                        <p>Nous découvrons d'autre ruines, dans un cadre magnifiques.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise5.jpg" height="350" width="400" alt="Un bunker"/>
                     <Panel>
                        <p>on découvre un bunker, photo prise avec une mer agitée en arrière plan.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise6.jpg" height="350" width="400" alt="Le phare de Leucate"/>
                     <Panel>
                      <p>Le phare de Cap Leucate, dommage il ne se visite pas.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise7.jpg" height="350" width="400" alt="falaise de leucate" />
                     <Panel>
                        <p>On découvre en bas de la falaise, une petite plage : "la plagette".</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise8.jpg" height="350" width="400" alt="La plagette de Leucate"/>
                     <Panel>
                        <p>Magnifique plagette, attention la descente est rude.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/falaise9.jpg" height="350" width="400" alt="La plagette de Leucate"/>
                     <Panel>
                      <p>Plage au calme et magnifique avec la falaise et la mer.</p>
                     </Panel>
                </Panel>
            </div>
            
            <div>
                    <Panel header="PORT LEUCATE : Le Village des Ostréiculteurs">
                        <p>Si vous aimez les huitres, les fruits de mer, vous pouvez aller au <a className={css(styles.lienText)} href="https://www.audetourisme.com/fr/experiences/leucate-village-ostreiculteurs/">village des ostréiculteurs</a> aussi appelé "villages des pêcheurs".</p>
                        <p>C'est un lieu magnifique situé entre mer et étang avec des cabanons en enfilade où vous pourrez y déguster les fruits de mer, voir les embarcations des pêcheurs.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/maps/place/Village+des+ostr%C3%A9iculteurs/@42.8854958,3.0486759,15z/data=!4m5!3m4!1s0x0:0xec3231b8074ad5c5!8m2!3d42.8854988!4d3.0486787">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur1.jpg" height="350" width="400" alt="Le village des pêcheurs" />
                     <Panel>
                        <p>Découverte du village des ostréiculteurs de Port Leucate.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur2.jpg" height="350" width="400" alt="Restaurants"/>
                     <Panel>
                        <p>Beaucoup de restaurants pour y déguster des plats bien frais.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur3.jpg" height="350" width="400" alt="restaurants"/>
                     <Panel>
                      <p>Vue sur les embarcations des cabanons (restaurants).</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur4.jpg" height="350" width="400" alt="leucate" />
                     <Panel>
                        <p>Vue sur l'ensemble des des cabanons coté mer.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur5.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel>
                        <p>Vue sur les embarcations et le matériels des pêcheurs.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/pecheur6.jpg" height="350" width="400" alt="restaurants"/>
                     <Panel>
                      <p>Certains cabanons ont des terrasses au bord de l'eau.</p>
                     </Panel>
                </Panel>
            </div>

            <div>
                    <Panel header="PORT LEUCATE : Le Port">
                        <p>Les quais de <a className={css(styles.lienText)} href="https://www.tourisme-leucate.fr/decouvrir/leucate-en-mediterranee/les-villages/port-leucate/">Port Leucate</a> sont très animés tous l'été, on peut y découvrir de nombreuses boutiques, de nombreux restaurants et des glaciers.</p>
                        <p>C'est un lieu très agréable pour les grands et les petits avec des aire de jeux pour les enfants mais aussi des animations sont organisées avec par exemple des marchés nocturnes.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/search?q=le%20port%20de%20leucate&oq=le+port+de+leu&aqs=chrome.1.69i57j0i512j0i22i30l3j69i64j69i61.9306j0j15&client=ubuntu&sourceid=chrome&ie=UTF-8&hs=6Rx&tbs=lf:1,lf_ui:1&tbm=lcl&sxsrf=APq-WBuWBSqJ9Vn3_v9Tvs54e0v3teX96g:1646662905017&rflfq=1&num=10&rldimm=8530661891023654996&lqi=ChJsZSBwb3J0IGRlIGxldWNhdGVIrpW0joiAgIAIWhcQABgAGAIiD3BvcnQgZGUgbGV1Y2F0ZZIBFnBvcnRfb3BlcmF0aW5nX2NvbXBhbnmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlZha3BpVlROQlJSQUKqAQwQASoIIgRwb3J0KAQ&phdesc=SMhA7CsVWkc&ved=2ahUKEwinqZKsmbT2AhXRzIUKHZxOBAcQvS56BAgUEFQ&rlst=f#rlfi=hd:;si:8530661891023654996,l,ChJsZSBwb3J0IGRlIGxldWNhdGVIrpW0joiAgIAIWhcQABgAGAIiD3BvcnQgZGUgbGV1Y2F0ZZIBFnBvcnRfb3BlcmF0aW5nX2NvbXBhbnmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlZha3BpVlROQlJSQUKqAQwQASoIIgRwb3J0KAQ,y,SMhA7CsVWkc;mv:[[42.9207241,3.0622939],[42.8528879,3.0262311]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/port1.jpg" height="350" width="400" alt="Le port" />
                     <Panel>
                        <p>Magnifique port de Leucate avec de nombreuses animations l'été.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/port2.jpg" height="350" width="400" alt="Le port"/>
                     <Panel>
                        <p>De nombreux magasins et de restaurants tout autours du port.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/port3.jpg" height="350" width="400" alt="Le port"/>
                     <Panel>
                      <p>On y trouve égalements des marchés, été comme hiver.</p>
                     </Panel>
                </Panel>
            </div>

            <div>
                    <Panel header ="PORT LEUCATE : Les Plages">
                        <p>Port Leucate dispose d'une immense plage de 8 km avec des allées pour se promener à pied ou à vélo. On peut y découvrir le Ponton 
                            mais aussi un miroir d'eau pour amuser les enfants.</p>
                            <p>Fin avril, on peut admirer un festival connu par les fans de la glisse qui est le <a className={css(styles.lienText)} href="https://www.tourisme-leucate.fr/offres/mondial-du-vent-leucate-fr-3408834/"> Mondial du vent</a> qui fêtera c'est 25 ans en 2022.</p>
                         <p>Si vous voulez y aller cliquer ici  <a href="https://www.google.com/search?q=ponton%20port%20leucate&oq=ponton&aqs=chrome.2.69i57j35i39j0i67l2j46i512j0i512l4j0i131i433.4867j0j15&client=ubuntu&sourceid=chrome&ie=UTF-8&hs=Mtb&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=APq-WBvfwRL9b3DEdJSrMSWGaQuuEv-zdw:1646659468558&rflfq=1&num=10&rldimm=15135309694855873608&lqi=ChNwb250b24gcG9ydCBsZXVjYXRlSKyHoPfArYCACFohEAAYABgBGAIiE3BvbnRvbiBwb3J0IGxldWNhdGUqAggCkgEQb2JzZXJ2YXRpb25fZGVja5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOcGEwbEVUVVpSRUFFqgEOEAEqCiIGcG9udG9uKAQ&ved=2ahUKEwi3x8HFjLT2AhVLQBoKHcThA7oQvS56BAgTEFQ&rlst=f#rlfi=hd:;si:15135309694855873608,l,ChNwb250b24gcG9ydCBsZXVjYXRlSKyHoPfArYCACFohEAAYABgBGAIiE3BvbnRvbiBwb3J0IGxldWNhdGUqAggCkgEQb2JzZXJ2YXRpb25fZGVja5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOcGEwbEVUVVpSRUFFqgEOEAEqCiIGcG9udG9uKAQ;mv:[[42.8682466,3.0464556],[42.851082299999995,3.0409283]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2">
                            <img src="/assets/mapcarte.png" height="30" width="30" alt="lien google map"></img> </a></p>  
                    </Panel>
                </div>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent1.jpg" height="350" width="400" alt="leucate" />
                     <Panel>
                        <p>A découvrir sur les plages, le mondial du vent.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent2.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel>
                        <p>Ce festival se passe fin avril, avec beuacoup de sportifs.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent3.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel>
                      <p>Impressionnant, un sportif glissant sur les vagues grâce au vent.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent4.jpg" height="350" width="400" alt="leucate" />
                     <Panel>
                        <p>Plusieurs sportifs participent, c'est Impressionnant</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent5.jpg" height="350" width="400" alt="Leucate village"/>
                     <Panel>
                        <p>Magnifique photo avec une mer agitée et de nombreuses vagues.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent6.jpg" height="350" width="400" alt="Des ruines du château"/>
                     <Panel>
                      <p>Impressionnant sport avec la mer agitée.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent7.jpg" height="350" width="400" alt="Ponton de Port Leucate" />
                     <Panel>
                        <p>On peut admirer la mer sur ce Ponton ouvert au public.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent8.jpg" height="350" width="400" alt="Ponton de Port Leucate"/>
                     <Panel>
                        <p>Magnifique Ponton pour faire de belle photo.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill>
                    <img src="/assets/Leucate/vent9.jpg" height="350" width="400" alt="Phare de Port Leucate"/>
                     <Panel>
                      <p>Zoom sur le phare de Port Leucate, photo prise du Ponton.</p>
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

export default PortLeucate;