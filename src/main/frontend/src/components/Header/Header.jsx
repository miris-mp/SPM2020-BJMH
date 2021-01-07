import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import AuthenticationService from '../services/authenticationService.js'

class Header extends Component {
    render() {
        console.log(AuthenticationService.isLogged())
        return (
            <div className="Header">
                <header className="section-header">
                    <section className="header-main border-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-sm-4 col-md-4 col5">
                                    <Link to="/welcome" className="brans-wrap">
                                        <img className="logo" src={'../logo.png'} />
                                    </Link>
                                </div>
                                <User />
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        )
    }
}

export default withRouter(Header)

const Menu = () => {
    return (
        <div className="container" style={{ width: '55%' }}>
            <h3>dffdfd</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav3"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav3">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link pl-0" href="#"> <strong>All category</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Drivers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

/**
const Search = () => {
    return (
        <div className="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
            <form action="#" className="search">
                <div className="input-group w-100">
                    <input type="text" className="form-control" style={{width:'55%'}} placeholder="Cerca" />
                    <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
    **/
const User = () => {
const userIcon = <FontAwesomeIcon icon={faUser} />

    return (
        <div className="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
            <div className="d-flex justify-content-end">

                <Link className="widget-header mr-3" to="/login">
                <div className="icon icon-sm rounded-circle border ">
                        {userIcon}
                    </div>
                </Link>
                

                <UserInfo/>
            </div>
        </div>
    )
}

const UserInfo = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    if (AuthenticationService.isLogged()) {
        return (
            <div className="text">
                <span className="text-muted">Benvenuto {AuthenticationService.getUserInfo()}</span>
                <div>
                    <Link to="/logout">Logout </Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        )
    }
    else {
        return (
            <Link className="widget-header mr-3" to="/register">
                <div className="icon icon-sm rounded-cirlce border">
                    {userIcon}
                </div>
            </Link>
        )
    }
}