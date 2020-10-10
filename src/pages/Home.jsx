import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/styles/components/Home.scss';

const Home = () => (
    <>
        <div className="hero">
            <h1>Welcome</h1>
            <h2>Manage your client database </h2>
            <Link to="/clients" className="btn btn-primary">Get Started</Link>
        </div>
    </>
);

export default connect(null, null)(Home);