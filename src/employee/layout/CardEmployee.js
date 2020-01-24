import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteDatEmployeeById, getDataEmployee, getDataEmployeeById} from "../services/EmployeeService";
import {
    DataEmployeeById,
    fetchDataEmployee,
    resetState,
    successPaginationData,
    successPaginationPosition
} from "../constants/EmployeeConstant";
import FormUpdate from "./FormUpdate";
import {photoDefaultError} from "../constants/StringConstatant";
import {numberOne, numberZero} from "../constants/NumberConstant";

class CardEmployee extends Component {

    render() {
        return (
            <div className="mb-4 mt-1 my-1">
                <div className="card-body z-depth-1 rounded ml-3 mr-3">
                    <div className="row mb-3" id="navbar-example">
                        {
                            this.props.paginationCardEmployee.data.map((data) => {
                                return (
                                    <div className="card-wrapper">
                                        <div className="card profile-two">
                                            <div className="card-image profile-img--two">
                                                <img className="card-img-top lazyload" src={data.photo}
                                                     onError={(e) => {
                                                         e.target.src = photoDefaultError
                                                     }}
                                                     alt="CardEmployee image cap"/>
                                            </div>
                                            <ul className="social-icons">
                                                <li title="Update Contact Employee">
                                                    <a data-toggle="modal" data-target="#modalFormUpdate"
                                                       onClick={() => {
                                                           this.getEmployeeById(data.id).then(r => r)
                                                       }}>
                                                        <i className="fas fa-wrench"/>
                                                    </a>
                                                </li>
                                                <li title="Delete Contact Employee">
                                                    <a onClick={() => {
                                                        this.handleDeleteEmployeeById(data.id).then(r => r)
                                                    }}
                                                    >
                                                        <i className="fas fa-trash"/>
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="jane text-sm-center">
                                                {data.firstName} {data.lastName}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <FormUpdate loadData={this.fetchDataEmployee}/>
                <div className="text-center form-sm mt-2">
                    <button className="btn btn-info rounded-lg" onClick={this.paginationDataBack}>
                        <i className="fas fa-angle-double-left"/>
                    </button>
                    <button className="btn btn-info" onClick={this.paginationDataNext}><i
                        className="fas fa-angle-double-right"/></button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchDataEmployee().then(result => {
            let employees = this.chunk(result,  this.props.paginationCardEmployee.size);
            this.props.dispatch({...successPaginationData, data:employees[this.props.paginationCardEmployee.position]})
        });
    }

    chunk(array, size) {
        const result = [];
        for (let i = numberZero; i < array.length; i++) {
            const last = result[result.length - numberOne];
            if (!last || last.length === size) {
                result.push([array[i]]);
            } else {
                last.push(array[i]);
            }
        }
        return result;
    }

    fetchDataEmployee = async () => {
        const dataEmployee = await getDataEmployee();
        if (!(dataEmployee === null)) {
            this.props.dispatch({...fetchDataEmployee, employee: dataEmployee.data});
        }
        return dataEmployee.data;
    };

    getEmployeeById = async (employeeId) => {
        const dataEmployeeById = await getDataEmployeeById(employeeId);
        if (!(dataEmployeeById === null)) {
            this.props.dispatch({...DataEmployeeById, dataUpdateEmployee: dataEmployeeById.data});
        }
    };

    handleDeleteEmployeeById = async (employeeId) => {
        if (!(employeeId === null)) {
            await deleteDatEmployeeById(employeeId);
        }
    };
    paginationDataNext = async () => {
        const employee = this.props.employee;
        let employees = this.chunk(employee, this.props.paginationCardEmployee.size);
        if (this.props.paginationCardEmployee.position < employees.length - numberOne) {
            console.log(this.props.paginationCardEmployee.position)
            const position = this.props.paginationCardEmployee.position;
            await this.props.dispatch({...successPaginationPosition, position: position + numberOne}) ;
            this.props.dispatch({...successPaginationData, data:employees[this.props.paginationCardEmployee.position]})

        }
        // let data = this.props.employee;
        // dataPagination = [];
        // if (!(pagination > data.length)) {
        //     pagination = pagination + 3;
        //     for (let i = pagination; i < pagination + size; i++) {
        //         dataPagination.push({...data[i]});
        //     }
        // }
        // this.props.dispatch({...resetState});
    };

    paginationDataBack = async() => {
        const employee = this.props.employee;
        let employees = this.chunk(employee, this.props.paginationCardEmployee.size);
        if (this.props.paginationCardEmployee.position > numberZero) {
            const position = this.props.paginationCardEmployee.position;
            await this.props.dispatch({...successPaginationPosition, position: position - numberOne}) ;
            this.props.dispatch({...successPaginationData, data:employees[this.props.paginationCardEmployee.position]})
        }
        // let data = this.props.employee;
        // dataPagination = [];
        // pagination = pagination - 3;
        // for (let i = pagination; i < pagination + size; i++) {
        //
        //     dataPagination.push({...data[i]});
        // }
        // this.props.dispatch({...resetState});
    };

}

function mapStateToProps(state) {
    return {...state};
}

export default connect(
    mapStateToProps,
)(CardEmployee);
