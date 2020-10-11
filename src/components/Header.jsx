import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
    <div className="header">
        <Link to="/">
            <img src={logo} alt=""/>
        </Link>
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Policy and Terms</li>
        </ul>
    </div>
);

export default Header;