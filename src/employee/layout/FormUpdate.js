import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    resetState, successUpdateAge, successUpdateFirstName, successUpdateLastName, successUpdateUrlPhoto,
} from "../constants/EmployeeConstant";
import {updateDataEmployee} from "../services/EmployeeService";
import {
    photoDefaultError, placeholderAge,
    placeholderFirstName,
    placeholderLastName,
    placeholderPhoto
} from "../constants/StringConstatant";
import {numberOne} from "../constants/NumberConstant";

class FormUpdate extends Component {

    DataTable = require('datatables.net');

    render() {
        return (
            <div className="modal fade" id="modalFormUpdate" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">

                        <div className="modal-c-tabs">

                            <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">

                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" role="tab">
                                        <img className="card-img-100 rounded-circle"
                                             src={this.props.dataUpdateEmployee.photo}
                                             onError={(e) => {
                                                 e.target.src = photoDefaultError
                                             }}
                                             alt="CardEmployee image cap"/>
                                        <a className="ml-3">Update Form</a>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane fade in show active" id="panel7" role="tabpanel">

                                    <div className="modal-body">

                                        <div className="input-group mb-2 mr-sm-2 mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text" title={placeholderPhoto}>
                                                    <i className="fas fa-file-image"/>
                                                </div>
                                            </div>
                                            <input type="url" id="modalLRInput14"
                                                   className="form-control validate" onChange={this.handleInputUrlPhoto}
                                                   value={this.props.dataUpdateEmployee.photo}/>
                                        </div>

                                        <div className="input-group mb-2 mr-sm-2 mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"
                                                     title={placeholderFirstName + " " + placeholderLastName}>
                                                    <i className="fas fa-user"/>
                                                </div>
                                            </div>
                                            <input type="text" id="modalLRInput14"
                                                   className="form-control validate"
                                                   onChange={this.handleInputFirstName}
                                                   value={this.props.dataUpdateEmployee.firstName}/>
                                            <input type="text" id="modalLRInput14"
                                                   className="form-control validate" onChange={this.handleInputLastName}
                                                   value={this.props.dataUpdateEmployee.lastName}/>
                                        </div>

                                        <div className="input-group mb-2 mr-sm-2 mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text" title={placeholderAge}>
                                                    <i className="fas fa-sort-numeric-up-alt"/>
                                                </div>
                                            </div>
                                            <input type="number" min={numberOne} id="modalLRInput14"
                                                   className="form-control validate" onChange={this.handleInputAge}
                                                   value={this.props.dataUpdateEmployee.age}/>
                                        </div>

                                        <div className="text-center form-sm mt-2">
                                            <button className="btn btn-info" onClick={this.handleUpdateDataEmployee}
                                                    data-dismiss="modal">Update <i
                                                className="fas fa-sign-in ml-1"/></button>
                                            <button type="button" className="btn btn-outline-info waves-effect ml-auto"
                                                    data-dismiss="modal">Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleLoadData = () => {
        this.props.loadData();
    };

    handleInputUrlPhoto = (event) => {
        event.preventDefault();
        this.props.dispatch({...successUpdateUrlPhoto, urlPhoto: event.target.value});
    };

    handleInputFirstName = (event) => {
        event.preventDefault();
        this.props.dispatch({...successUpdateFirstName, firstName: event.target.value});
    };

    handleInputLastName = (event) => {
        event.preventDefault();
        this.props.dispatch({...successUpdateLastName, lastName: event.target.value});
    };

    handleInputAge = (event) => {
        event.preventDefault();
        this.props.dispatch({...successUpdateAge, age: event.target.value});
    };

    handleUpdateDataEmployee = async () => {
        const dataEmployee = {...this.props.dataUpdateEmployee};
        const data = {};
        data.photo = dataEmployee.photo;
        data.firstName = dataEmployee.firstName;
        data.lastName = dataEmployee.lastName;
        data.age = dataEmployee.age;
        await updateDataEmployee(data, dataEmployee.id);
        this.props.dispatch(resetState);
        this.handleLoadData();
    };
}

function mapStateToProps(state) {
    return {...state};
}

export default connect(
    mapStateToProps,
)(FormUpdate);
