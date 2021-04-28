import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Alerts from './components/Alerts'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'



function App() {

  return(
    <Container>
      <Router>
        <Alerts />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Container>
  )

}

export default App;
