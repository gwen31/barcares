import React from 'react';
import "../styles/header.css";



const Header = () => {
    return (
        <>
            <div className="blockContainer">
                <div className="header">
                    <img className="banniere" src="./assets/header.jpg" alt="image de la plage" />
                    <h2 className="title">locationbarcares.fr</h2>
                    <h3 className="describe">Appartement T2 cabine vue mer Wifi</h3>
                   
                    <img className="diapo" src="./assets/image1.jpg" alt="image de la plage" />
                    <img className="diapo" src="./assets/image1.jpg" alt="image de la plage" />
                </div>
            </div>
        </>
    );
};

export default Header;