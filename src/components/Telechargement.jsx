import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Telechargement = () => {
    return (
        <div className={css(styles.container)}>
            <h2>Téléchargement</h2>
            <p>Vous pouvez téléchargé le bail de location et l'état des lieux ici</p>
            <div className={css(styles.subcontainer)}>
                <div className={css(styles.telechargment)}>
                    <h3>Bail de location</h3>  
                        <div><a className={css(styles.lien)} href="/media/Modele_Contrat_Location_Saisonniere-1.doc" download="contrat de location"> Contrat de location <img src="/assets/logos/docx_mac-256_32_35919.png" height="60px" width="60px" alt="logo format docx" /></a></div>
                        <div><a className={css(styles.lien)} href="/media/Modele_Contrat_Locationbail-saisonnier.pdf" download="contrat de location"> Contrat de location <img src="/assets/logos/file_type_pdf_icon_130274.png" height="90px" width="90px" alt="logo format pdf" /></a></div>     
                </div>
                <div className={css(styles.telechargment)}>
                    <h3>Etat des lieux</h3>
                        <div><a className={css(styles.lien)} href="/media/Etat-des-lieux-T2-T3-simplifie.pdf" download="Etat des lieux T2 T3">Etat des lieux T2 T3 simplifié <img src="/assets/logos/file_type_pdf_icon_130274.png" height="90px" width="90px" alt="logo format pdf" /></a></div>
                        <div><a className={css(styles.lien)} href="/media/Etat_des_lieux_annexe_mobilier.pdf" download="Etat des lieux annexes mobilier">Etat des lieux annexe mobilier <img src="/assets/logos/file_type_pdf_icon_130274.png" height="90px" width="90px" alt="logo format pdf" /></a></div>
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
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '10px',
            padding: '40px',
            flexDirection: 'column',
        }
    },
  
    subcontainer:{
        "@media (min-width: 600px)":{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '60%',
        margin: 'auto',
        marginTop: '60px',
       
        },
        "@media (max-width: 768px)":{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            margin: 'auto',
            marginTop: '60px',
        },
    },
    telechargment:{
        "@media (min-width: 600px)":{
        width: '70%',
        margin: 'auto',
        marginTop: '20px',
        padding: '30px',
        border: '1px solid black',
        boxShadow: '8px 8px 10px 0 rgba(0,0,0,0.5)',
        },
        "@media (max-width: 768px)":{
        width: '100%',
        margin: 'auto',
        marginTop: '20px',
        padding: '30px',
        border: '1px solid black',
        boxShadow: '8px 8px 10px 0 rgba(0,0,0,0.5)',
        },
    }, 
   
    lien:{
        textDecoration:'none',
       
    }
})

export default Telechargement;