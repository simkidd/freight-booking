import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './pages/Booking'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Booking />
        </Route>
      </Switch>
    </Router>
  )
}

export default App