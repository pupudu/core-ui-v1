import React from 'react';
import { Router } from '@reach/router';
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Aside from './Aside';
import Footer from './Footer';

function App(props) {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Router>
          <Sidebar default />
        </Router>
        <main className="main">
          <Breadcrumb />
          <div className="container-fluid">
            <Router>{props.children}</Router>
          </div>
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
