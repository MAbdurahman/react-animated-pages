/*===========================================
            App.js
===========================================*/
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Skills from './components/SkillsPage';
import Portfolio from './components/PortfolioPage';
import Contact from './components/ContactPage';



const App = () => {
  return (
    <>
      <Navbar/>
      <main className="container-fluid">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </main>
    </>
  )
}

export default App;

