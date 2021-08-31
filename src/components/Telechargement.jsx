import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Telechargement = () => {
    return (
        <div className={css(styles.container)}>
            <h2>Téléchargement</h2>
            <p className={css(styles.p)}>Vous pouvez téléchargé <span>le bail de location </span>et <span>l'état des lieux ici</span></p>
            <div className={css(styles.subcontainer)}>
            <div className={css(styles.telechargment)}>
                <h3>Bail de location</h3>  
                    <button className={css(styles.button)}><a className={css(styles.lien)} href="/media/Modele_Contrat_Location_Saisonniere-1.doc" download="contrat de location"> Contrat de location format Word </a></button>
                     <button className={css(styles.button)}><a className={css(styles.lien)} href="/media/Modele_Contrat_Locationbail-saisonnier.pdf" download="contrat de location"> Contrat de location format pdf</a></button>     
            </div>
            <div className={css(styles.telechargment)}>
                <h3>Etat des lieux</h3>
                    <button className={css(styles.button)}><a className={css(styles.lien)} href="/media/Etat-des-lieux-T2-T3-simplifie.pdf" download="Etat des lieux T2 T3">Etat des lieux T2 T3 simplifié</a></button>
                    <button className={css(styles.button)}><a className={css(styles.lien)} href="/media/Etat_des_lieux_annexe_mobilier.pdf" download="Etat des lieux annexes mobilier">Etat des lieux annexe mobilier</a></button>
            </div>
            </div>
        </div>
       
    );
};

const styles = StyleSheet.create({
    container: {
        "@media (min-width: 600px)":{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '10px',
        padding: '40px',
        flexDirection: 'column',
        width: '100%',
        },
        "@media (max-width: 768px)":{
            width: '90%',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '10px',
            padding: '40px',
            flexDirection: 'column',
        }
    },
    p:{
        marginTop: '30px',
        fontSize: '30px'
    },
    subcontainer:{
        "@media (min-width: 600px)":{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '60%',
        margin: 'auto',
        marginTop: '60px',
        border: '2px solid black',
        boxShadow: '8px 8px 10px 0 rgba(0,0,0,0.5)',
        },
        "@media (max-width: 768px)":{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            margin: 'auto',
            marginTop: '60px',
            border: '2px solid black',
            boxShadow: '8px 8px 10px 0 rgba(0,0,0,0.5)'
        },
    },
    telechargment:{
        "@media (min-width: 600px)":{
        width: '100%',
        margin: 'auto',
        marginTop: '20px',
        padding: '30px',
        },
        "@media (max-width: 768px)":{
        width: '100%',
        margin: 'auto',
        marginTop: '20px',
        padding: '30px',
        },
    }, 
    button:{
        "@media (min-width: 600px)":{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            margin: 'auto',
            marginTop: '40px',
            width: '80%',
            fontSize: '20px',
            padding: '10px',
            backgroundColor: '#adb3d6',
            borderRadius: '8px 8px 8px 8px',
            ':hover':{
            opacity: 0.5
            },
    },
        "@media (max-width: 600px)":{
            fontSize: '18px',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            margin: 'auto',
            marginTop: '40px',
            width: '100%',
            fontSize: '20px',
            padding: '10px',
            backgroundColor: '#adb3d6',
            borderRadius: '8px 8px 8px 8px',
            },
    },
    lien:{
        textDecoration:'none',
       
    }
})

export default Telechargement;