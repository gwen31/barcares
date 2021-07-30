import React from 'react';
import "../styles/header.css";

const Header = () => {
    return (
        <>
            <div className="block-container">
                <div className="header">
                    <img className="banniere" src="./assets/header-img.jpg" alt="image de la plage" />
                    <h2 className="title">locationbarcares.fr</h2>
                    <h3 className="describe">Appartement T2 cabine vue mer Wifi</h3>
                </div>
            </div>
        </>
    );
};

export default Header;