import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

import Layout from '../components/Layout';
import NewClient from '../pages/NewClient';
import Clients from '../pages/Clients';

import '../assets/styles/App.scss';

const App = () => (
    <BrowserRouter>
        <Layout> 
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/clients" component={Clients}/>
                <Route exact path="/clients/new" component={NewClient}/>
                <Route />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;