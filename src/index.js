import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AboutMe from './Components/AboutMe'
import Goals from './Components/Goals'
import Projects from './Components/Projects'
import Flatiron from './Components/Flatiron'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/goals" component={Goals} />
      <Route path="/projects" component={Projects} />
      <Route path="/flatiron" component={Flatiron} />


    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
