import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Alerts from './components/Alerts'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'
import Upload from './components/Upload'
import Galleries from './components/Galleries'
import Compare from './components/Compare'
import Logout from './components/Logout'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { getToken } from './services/localStorage'
import Navigation from './components/Navigation'



function App() {

  return(
    <Container>
      <Router>
        { !getToken() ? <Redirect to="/" component={Home} /> : null }
        <Navigation />
        <Alerts />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/logout' component={Logout} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute exact path="/galleries/new" component={Upload} />
          <PrivateRoute path="/my-galleries" component={Galleries} />
          <PrivateRoute path='/galleries/:id' component={Compare} />
        </Switch>
      </Router>
    </Container>
  )

}

export default App;
