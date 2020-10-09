/*===========================================
            App.js
===========================================*/
import React, {useContext} from 'react';
import {__RouterContext} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Skills from './components/SkillsPage';
import Portfolio from './components/PortfolioPage';
import Contact from './components/ContactPage';
import Footer from './components/Footer';



const App = () => {

  const {location } = useContext(__RouterContext);
  console.log(location);
  const transitions = useTransition(location, location => location.pathName, {
		from: { opacity: 0, transform: 'translate(100%, 0)' },
		enter: { opacity: 1, transform: 'translate(0%, 0)' },
		leave: { opacity: 0, transform: 'translate(-50%, 0)' },
  });

  return (
		<>
			<Navbar />
			<main className='container-fluid'>
				{transitions.map(({ item, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch location={item}>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
							<Route exact path='/skills' component={Skills} />
							<Route exact path='/portfolio' component={Portfolio} />
							<Route exact path='/contact' component={Contact} />
						</Switch>
					</animated.div>
				))}
			</main>
			<Footer/>
		</>
  );
}

export default App;

