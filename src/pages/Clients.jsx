import React from 'react';

import Client from '../components/Client';

import '../assets/styles/components/Clients.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Clients = ({ clients }) => {

    return(
        <div className="main">
                <div className="title">
                    <h2>Your Clients</h2>
                    <Link to="/clients/new" className="btn btn-primary">Add Client</Link>
                </div>
            
            <div className="container">
                {clients.map(item => 
                        <Client 
                            key={item.id}
                            {...item}
                        />
                    )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients,
    }
}

export default connect(mapStateToProps, null)(Clients);