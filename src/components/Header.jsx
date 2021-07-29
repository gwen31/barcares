import React from 'react';
import "../styles/header.css";

const Header = () => {
    return (
        <>
            <div className="block-container">
                <div className="header">
                    <img className="banniere" src="./assets/header-img.jpg" alt="image de la plage" />
                    <p className="title">locationbarcares.fr</p>
                </div>
            </div>
        </>
    );
};

export default Header;