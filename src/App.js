import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'
import IndexPage from './pages/IndexPage'
import LessonsPage from './pages/LessonsPage';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path='/' component={IndexPage} />
    <Route path='/lessons/' component={LessonsPage} />
  </Router>
)

export default App;
