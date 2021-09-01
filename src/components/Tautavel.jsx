import React from 'react';
import { Panel } from 'rsuite';
import { StyleSheet, css } from 'aphrodite';

const Tautavel = () => {
    return (
        <div className= {css(styles.container)}>
                  <h1>Tautavel</h1>
            <div className={css(styles.containercard)}>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{ width: 290 }}>
                    <img src="/assets/Tautavel/rando.jpg" height="250" alt="" />
                     <Panel header="RSUITE">
                        <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                     </Panel>
                </Panel>
                <Panel  className={css(styles.card)} shaded bordered bodyFill style={{ width: 290 }}>
                    <img src="/assets/Tautavel/rando1.jpg" height="250" alt=""/>
                     <Panel header="RSUITE">
                        <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{ width:290 }}>
                    <img src="/assets/Tautavel/ruines.jpg" height="250" alt="" />
                     <Panel header="RSUITE">
                      <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{width: 290 }}>
                    <img src="/assets/Tautavel/ruines1.jpg" height="250" alt="" />
                     <Panel header="RSUITE">
                      <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{ width: 290 }}>
                    <img src="/assets/Tautavel/ruines2.jpg" height="250" alt="" />
                     <Panel header="RSUITE">
                      <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{ width: 290 }}>
                    <img src="/assets/Tautavel/ville.jpg" height="250" alt="" />
                      <Panel header="RSUITE">
                       <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{ width: 290 }}>
                    <img src="/assets/Tautavel/ville1.jpg" height="250" alt="" />
                     <Panel header="RSUITE">
                      <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{width: 290 }}>
                    <img src="/assets/Tautavel/paysage.jpg" height="250" alt="" />
                     <Panel header="RSUITE">
                      <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                     </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{ width: 290 }}>
                     <img src="/assets/Tautavel/gorges.jpg" height="250" alt="" />
                      <Panel header="RSUITE">
                       <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{width: 290 }}>
                     <img src="/assets/Tautavel/gorges1.jpg" height="250" alt="" />
                      <Panel header="RSUITE">
                        <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{width: 290 }}>
                     <img src="/assets/Tautavel/gorges2.jpg" height="250" alt="" />
                      <Panel header="RSUITE">
                       <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                      </Panel>
                </Panel>
                <Panel className={css(styles.card)} shaded bordered bodyFill style={{ width: 290 }}>
                     <img src="/assets/Tautavel/gorges3.jpg" height="250" alt="" />
                      <Panel header="RSUITE">
                       <p>A suite of React components, sensible UI design, and a friendly development experience.</p>
                      </Panel>
                </Panel>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: "20px",
        display: "flex",
        margin: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid black"
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
        marginRight: '50px',
        marginBottom:'50px',
        
    }
})

export default Tautavel;