import React, { Component } from 'react'
import './Drivers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

export default class Drivers extends Component {
    state = {
        drivers:
            [
                { id: '67100671', name: 'Miriam Petrocchi', licencePlate: 'EF345GP', birthday: '28/09/1994' },
                { id: '67100421', name: 'Sara Petrocchi', licencePlate: 'EF345GP', birthday: '28/09/1994' },
                { id: '67100426', name: 'Michele Petrocchi', licencePlate: 'EF345GP', birthday: '28/09/1994' },
            ]
    }

    render() {
        const editIcon = <FontAwesomeIcon icon={faEdit} />
        const trashIcon = <FontAwesomeIcon icon={faTrash} />
        const addIcon = <FontAwesomeIcon icon={faPlusSquare} />
        

        return (
            <div className="Drivers">
                <section className="container">
                    <h1>Drivers list:</h1>
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h2>Search: <small>0 Drivers</small></h2>
                                </div>
                                <div className="col-sm-7">
                                    <button style={{ 'marginleft': '20px' }} className="btn btn-success float-right">
                                        <i>{addIcon}</i> 
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="table-filter">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="show-entries">
                                        <span>Show</span>
                                        <select className="form-control">
                                            <option>10</option>
                                            <option>15</option>
                                            <option>20</option>
                                            <option>50</option>
                                        </select>
                                        <span>rows</span>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                    <div className="filter-group">
                                        <label>Filter: </label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <table id="drivers" className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>license plate</th>
                                    <th>Date</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.drivers.map(
                                        (driver, index) =>
                                            <tr key={driver.id}>
                                                <td>
                                                    {driver.id}
                                                </td>
                                                <td>
                                                    {driver.name}
                                                </td>
                                                <td>
                                                    {driver.licencePlate}
                                                </td>
                                                <td>
                                                    {driver.birthday}
                                                </td>
                                                <td>
                                                    <button className="btn btn-warning table-buttons">
                                                        <i aria-hidden="true">{editIcon}</i></button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-warning table-buttons" onClick={() => this.deleteDriver(index)}>
                                                        <i aria-hidden="true">{trashIcon}</i></button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )

    }
    deleteDriver = (index) => {
        const newDrivers = [...this.state.drivers]
        newDrivers.splice(index, 1);
        this.setState({
            drivers: newDrivers
        })
    }
}