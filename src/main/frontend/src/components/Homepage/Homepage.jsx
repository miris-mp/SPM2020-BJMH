import React from 'react';
import { Link } from 'react-router-dom'
import HomepageService from '../services/api/HomepageService.js'

export default class Homepage extends React.Component {
    state = {
        homeMsg: '',
    }
    render() {
        return (
            <div className="Homepage">
                <section className="section-content bg padding-y">
                    <header className="section-heading">
                        <h2 className="section-title">Welcome</h2>
                    </header>
                    <p>Homepage</p>
                    <p>{this.props.match.params.userId}, clicca <Link to="/drivers">qui</Link></p>
                    <button type="button" className="btn btn-primary" onClick={this.getHomepage}>AXIOSSSSS</button>
                    <h3>{this.state.homeMsg}</h3>
                </section>
            </div>

        )
    }

    getHomepage = () => {
        HomepageService.getHomepageData()
        .then(response => this.handleResponse(response))
        .catch(error => this.handleError(error))
    }

    handleResponse = (response) => {
        this.setState({
            homeMsg: response.data
        })
    }

    handleError = (error) => {
        this.setState({
            homeMsg: error.response.data.message
        })
    }
}

