import React, { useState } from 'react';
import "./site.css";

const Site = () => {
    const [isPhoneOpen, setPhoneOpen] = useState(false);

    const handlePhoneIconClick = (event) => {
        event.preventDefault();
        setPhoneOpen(!isPhoneOpen);
    };

    return (
        <section>
            <div className="container">
                <div className="site">
                    <div className="site-icone">
                        <a href="https://www.facebook.com/profile.php?id=100067410566422&locale=ru_RU"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/sccann.me/"><i className="bi bi-instagram"></i></a>
                        <a href="https://t.me/sccannme"><i className="bi bi-telegram"></i></a>
                        <a href="#" onClick={handlePhoneIconClick}><i className="bi bi-telephone-fill"></i></a>
                    </div>
                </div>
            </div>
            <div className={`phone ${isPhoneOpen ? 'open' : ''}`}>
                <div className="numbers">
                    <p>(+374)-44-200-876</p>
                    <a href="tel:+37444200876"><button>Call</button></a>
                </div>
            </div>
        </section>
    );
};

export default Site;
