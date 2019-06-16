import React from 'react';
import Layout from './Layout/Layout';

import Dashboard from './App/Dashboard';

function App() {
  return (
    <Layout>
      <Dashboard path="/" />
    </Layout>
  );
}

export default App;
