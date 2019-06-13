import React from 'react';
import ReactDOM from 'react-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Main styles for this application
import './scss/style.scss';
// Temp fix for reactstrap
import './scss/core/_dropdown-menu-right.scss';

// Containers
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
