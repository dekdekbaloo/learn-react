import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import IndexPage from './pages/index'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path='/'>
      <IndexPage />
    </Route>
  </Router>
)

export default App;
