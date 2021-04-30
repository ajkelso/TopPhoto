import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Alerts from './components/Alerts'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'
import Upload from './components/Upload'
import Galleries from './components/Galleries'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { getToken } from './services/localStorage'



function App() {

  return(
    <Container>
      <Router>
        { !getToken() ? <Redirect to="/" component={Home} /> : null }
        <Alerts />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/galleries/new" component={Upload} />
          <PrivateRoute path="/my-galleries" component={Galleries} />
        </Switch>
      </Router>
    </Container>
  )

}

export default App;
