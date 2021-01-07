import React, { Component } from 'react';
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage'
import Error from './components/Error'
import Drivers from './components/Drivers/Drivers.jsx'
import Header from './components/Header/Header';
import Logout from './components/Logout/Logout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <Header/>
                    <Switch>
                        <Route path="/" exact component={Login}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/logout" component={Logout}></Route>
                        <AuthRoute path="/homepage/:userId" component={Homepage}></AuthRoute>
                        <AuthRoute path="/drivers" component={Drivers}></AuthRoute>
                        <Route component={Error}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}