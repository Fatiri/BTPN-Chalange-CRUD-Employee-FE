import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchDataEmployee, resetState,
    successAge,
    successFirstName,
    successLastName,
    successUrlPhoto
} from "../constants/EmployeeConstant";
import {getDataEmployee, submitDataEmployee} from "../services/EmployeeService";
import $ from "jquery";
import {
    photoDefaultError, placeholderAge,
    placeholderFirstName,
    placeholderLastName,
    placeholderPhoto
} from "../constants/StringConstatant";
import {numberOne} from "../constants/NumberConstant";

class FormInput extends Component {

    DataTable = require('datatables.net');

    render() {
        return (
            <div className="modal fade" id="modalInputForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">

                        <div className="modal-c-tabs">

                            <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" role="tab">
                                        <img className="card-img-100 rounded-circle"
                                             src={this.props.dataInputEmployee.photo}
                                             onError={(e) => {
                                                 e.target.src = photoDefaultError
                                             }}
                                             alt="CardEmployee image cap"/>
                                        <a className="ml-3">Input Form</a>
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
                                                   className="form-control validate" placeholder={placeholderPhoto}
                                                   onChange={this.handleInputUrlPhoto}
                                                   value={this.props.dataInputEmployee.photo}/>
                                        </div>

                                        <div className="input-group mb-2 mr-sm-2 mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"
                                                     title={placeholderFirstName + " " + placeholderLastName}>
                                                    <i className="fas fa-user"/>
                                                </div>
                                            </div>
                                            <input type="text" id="modalLRInput14"
                                                   className="form-control validate" placeholder={placeholderFirstName}
                                                   onChange={this.handleInputFirstName}
                                                   value={this.props.dataInputEmployee.firstName}/>

                                            <input type="text" id="modalLRInput14"
                                                   className="form-control validate" placeholder={placeholderLastName}
                                                   onChange={this.handleInputLastName}
                                                   value={this.props.dataInputEmployee.lastName}/>
                                        </div>

                                        <div className="input-group mb-2 mr-sm-2 mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text" title={placeholderAge}>
                                                    <i className="fas fa-sort-numeric-up-alt"/>
                                                </div>
                                            </div>
                                            <input type="number" min={numberOne} id="modalLRInput14"
                                                   className="form-control validate" placeholder={placeholderAge}
                                                   onChange={this.handleInputAge}
                                                   value={this.props.dataInputEmployee.age}/>
                                        </div>

                                        <div className="text-center form-sm mt-2">
                                            <button className="btn btn-info" onClick={this.handleSubmitDataEmployee}
                                                    data-dismiss="modal">Submit <i
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

    handleInputUrlPhoto = (event) => {
        event.preventDefault();
        this.props.dispatch({...successUrlPhoto, urlPhoto: event.target.value});
    };

    handleInputFirstName = (event) => {
        event.preventDefault();
        this.props.dispatch({...successFirstName, firstName: event.target.value});
    };

    handleInputLastName = (event) => {
        event.preventDefault();
        this.props.dispatch({...successLastName, lastName: event.target.value});
    };

    handleInputAge = (event) => {
        event.preventDefault();
        this.props.dispatch({...successAge, age: event.target.value});
    };

    handleSubmitDataEmployee = async () => {
        const dataEmployee = {...this.props.dataInputEmployee};
        await submitDataEmployee(dataEmployee);
        this.resetState();
    };

    resetState = async () => {
        this.props.dispatch(resetState);
        const setState = await getDataEmployee();
        if (!(setState === null)) {
            this.props.dispatch({...fetchDataEmployee, employee: setState.data});
            setTimeout(function () {
                $('#dtBasicExample').DataTable();
            }, 1000);
        }
    }

}

function mapStateToProps(state) {
    return {...state};
}

export default connect(
    mapStateToProps,
)(FormInput);
