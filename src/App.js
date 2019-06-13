import React from 'react';
import { Router } from '@reach/router';
import { Container } from 'reactstrap';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar/Sidebar';
import Breadcrumb from './Layout/Breadcrumb/Breadcrumb';
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
            <Router>
              <Dashboard path="/dashboard" />
            </Router>
          </Container>
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
