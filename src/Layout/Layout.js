import React from 'react';
import { Container } from 'reactstrap';
import { Router } from '@reach/router';
import Header from './Header';
import Sidebar from './Sidebar/Sidebar';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Aside from './Aside';
import Footer from './Footer';

function App(props) {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main">
          <Breadcrumb />
          <Container fluid>
            <Router>{props.children}</Router>
          </Container>
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
