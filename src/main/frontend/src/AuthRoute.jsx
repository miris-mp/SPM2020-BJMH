import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthenticationService from './components/services/authenticationService'

export default class AuthRoute extends Component {

    render() {
        
        if (AuthenticationService.isLogged()) {
            return <Route {...this.props} ></Route>
        }
        else {
            return <Redirect to="/login" />
        }

    }

}