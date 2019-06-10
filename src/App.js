import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar/Sidebar';
import Breadcrumb from './Layout/Breadcrumb';
import Aside from './Layout/Aside';
import Footer from './Layout/Footer';

import Dashboard from './Dashboard';

function App(props) {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar {...props} />
        <main className="main">
          <Breadcrumb />
          <Container fluid>
            <Switch>
              <Route path="/dashboard" name="Dashboard" component={Dashboard} />
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Container>
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
