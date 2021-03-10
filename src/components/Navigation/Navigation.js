import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="nav-div">
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
        </div>
    );
};

export default Navigation;