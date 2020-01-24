import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteDatEmployeeById, getDataEmployee, getDataEmployeeById} from "../services/EmployeeService";
import {DataEmployeeById, fetchDataEmployee} from "../constants/EmployeeConstant";
import $ from 'jquery'
import FormUpdate from "./FormUpdate";
import '../../App.scss'
import {deleteContactEmployee, updateContactEmployee} from "../constants/StringConstatant";

class TableEmployee extends Component {


    DataTable = require('datatables.net');

    render() {
        const data = this.props.employee;
        return (
            <div>
                <div className="mt-lg-1">
                    <div className=" card-cascade wider reverse my-4 pb-1 z-depth-1">
                        <div className="card-body card-body-cascade text-center wow fadeIn  pl-lg-5 pr-lg-5">
                            <table id="dtBasicExample"
                                   className="table text-lg-center table-responsive-lg table-striped table-bordered  "
                                   cellSpacing="0" width="100%">
                                <thead>
                                <tr>
                                    <th className="th-sm">First Name
                                    </th>
                                    <th className="th-sm">Last Name
                                    </th>
                                    <th className="th-sm">Age
                                    </th>
                                    <th className="th-sm ">Option
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    data.map((data) => {
                                        return (<tr>
                                                <td>{data.firstName}</td>
                                                <td>{data.lastName}</td>
                                                <td>{data.age}</td>
                                                <td>
                                                    <div className="col-md-12">
                                                        <button type="button"
                                                                className="btn btn-sm light-blue px-3 rounded"
                                                                data-toggle="modal" data-target="#modalFormUpdate"
                                                                onClick={() => {
                                                                    this.handleGetEmployeeById(data.id).then(r => r)
                                                                }}
                                                                title={updateContactEmployee}
                                                        >
                                                            <i className="fas fa-wrench"/>
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-sm btn-danger px-3 rounded"
                                                                onClick={() => {
                                                                    this.handleDeleteEmployeeById(data.id).then(r => r)
                                                                }}
                                                                title={deleteContactEmployee}
                                                        >
                                                            <i className="fas fa-trash"/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <FormUpdate loadData={this.fetchDataEmployee}/>
            </div>
        );
    }

    componentDidMount = async ()=> {
       await this.fetchDataEmployee().then(r => r);
        setTimeout(function () {
            $('#dtBasicExample').DataTable();
        }, 2000);
    }

    fetchDataEmployee = async () => {
        const dataEmployee = await getDataEmployee();
        if (!(dataEmployee === null)) {
            this.props.dispatch({...fetchDataEmployee, employee: dataEmployee.data});
        }
    };

    handleGetEmployeeById = async (employeeId) => {
        const dataEmployeeById = await getDataEmployeeById(employeeId);
        if (!(dataEmployeeById === null)) {
            this.props.dispatch({...DataEmployeeById, dataUpdateEmployee: dataEmployeeById.data});
        }
    };
    handleDeleteEmployeeById = async (employeeId) => {
        if (!(employeeId === null)) {
            await deleteDatEmployeeById(employeeId);
        }
    }
}

function mapStateToProps(state) {
    return {...state};
}

export default connect(
    mapStateToProps,
)(TableEmployee);
