import React, { Component } from 'react'
import './Login.css'
import AuthenticationService from "../services/authenticationService.js"

export default class Login extends Component {

    state = {
        userId: '',
        password: '',
        isLogged: false,
        noLogged: false,
    }

    Login = () => {
        
        console.log("Want to access?")

        if (this.state.userId == "Miriam") {
            AuthenticationService.saveUserInfo(this.state.userId)

            this.props.history.push(`/homepage/${this.state.userId}`)
            /*
            this.setState({
                isLogged: true,
                noLogged: false
            })
            */
            console.log("OK Connessione")
        } else {
            this.setState({
                isLogged: false,
                noLogged: true
            })
            console.log("noooo")
        }
    }

    ChangeData = (event) => {
        console.log("Change data")
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return ( 
            <div className="Login">
                <section className="section-content padding-y">
                    <div className="container login-container">
                        <div className="row">
                            <div className="col-md-6 login-form bg">
                                <h3>Driver Login</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control"  name="userId" placeholder="Email" 
                                        value={this.state.userId} onChange={this.ChangeData} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"  name="password" placeholder="Password" 
                                        value={this.state.password} onChange={this.ChangeData} />
                                </div>
                                <div className="form-group">
                                    <button className="btnSubmit" onClick={this.Login}>Login</button>
                                </div>
                                <div className="form-group">
                                        <a href="#" className="ForgetPwd">Forgot your password?</a>
                                </div>
                                <ConnexKoMsg isNoLogged={this.state.noLogged}  /> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


function ConnexKoMsg(props) {
    if (props.isNoLogged) {
        return (
            <div className="alert alert-danger" role="alert">Email and/or password are wrong</div>
        )
    } else {
        return null
    }
}