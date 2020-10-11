import React from 'react';

import Client from '../components/Client';

import '../assets/styles/components/Clients.scss';
import { Link } from 'react-router-dom';

const Clients = () => {

    return(
        <div className="main">
                <div className="title">
                    <h2>Your Clients</h2>
                    <Link to="/" className="btn btn-primary">Add Client</Link>
                </div>
            
            <div className="container">
                <Client />
                <Client />
                <Client />
                <Client />
            </div>
        </div>
    )
}

export default Clients;