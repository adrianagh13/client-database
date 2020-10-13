import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Client from '../pages/Clients';

import Layout from '../components/Layout';
import NewClient from '../pages/NewClient';

const App = () => (
    <BrowserRouter>
        <Layout> 
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/clients" component={Client}/>
                <Route exact path="/clients/new" component={NewClient}/>
                <Route />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;