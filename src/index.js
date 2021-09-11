/*===========================================
            index.js
===========================================*/
import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Navbar from 'react-bootstrap/Navbar';



ReactDOM.render(<Router><App2/></Router>, document.getElementById('root'));


