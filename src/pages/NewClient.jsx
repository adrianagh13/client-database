import React from 'react';
import { connect } from 'react-redux';

import ClientForm from '../components/ClientForm';

import '../assets/styles/components/NewClient.scss';

const NewClient = () => {
    
    return (
        <div className="container new-client">
            <h2>Register a new Client</h2>
            <ClientForm />
        </div>
    )
};

export default connect(null, null)(NewClient);

