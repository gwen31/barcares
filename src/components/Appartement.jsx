import React from 'react';
import { Panel } from 'rsuite';
import { StyleSheet, css } from 'aphrodite';



const Appartement = () => {
    return (
        <div className= {css(styles.container)}>
        <h1>L'appartement</h1>
       
            <div>
                <Panel header="">
                    <p></p>  
                </Panel>
            </div>
        <div className={css(styles.containercard)}>
           <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
                </Panel>
        </Panel>
        <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart0.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
                </Panel>
        </Panel>
        <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart1.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
                </Panel>
        </Panel>
        <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart2.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
                </Panel>
        </Panel>
        <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart3.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
                </Panel>
        </Panel>
        <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart4.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
                </Panel>
        </Panel>
        <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart5.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
                </Panel>
        </Panel>
        
        <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart7.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
                </Panel>
        </Panel>
        <Panel className={css(styles.card)} shaded bordered bodyFill style={{ display: 'inline-block', width: "350" }}>
            <img src="/assets/Appartement/appart8.jpg" alt="" height="400" />
                <Panel>
                    <p></p>
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
        "@media (max-width: 738px)":{
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
        "@media (max-width: 738px)":{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginLeft:"60px"
            },
    },
    card:{
        "@media (min-width: 738px)":{
        boxShadow: '8px 8px 10px 0 rgba(0,0,0,0.5)',
        width: "200",
        marginRight: '60px',
        marginBottom:'60px',
        backgroundColor:'white' 
         },
         "@media (max-width: 738px)":{
            boxShadow: '8px 8px 10px 0 rgba(0,0,0,0.5)',
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