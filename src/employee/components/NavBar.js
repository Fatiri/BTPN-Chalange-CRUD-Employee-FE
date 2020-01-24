import React, {Component} from 'react';
import Modal from "../layout/FormInput";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className="mb-lg-5 ">
                <nav className="mb-1 navbar fixed-top navbar-expand-lg navbar-dark  light-blue z-depth-2 mb-4 ">
                    <div className="container">
                        <h2><img className="rounded-lg" src="img/jenius.png"/></h2>
                        <Link to="/" className="navbar-brand ml-2" href="#" title="Home Page">Employee Contact</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent-333"
                                aria-controls="navbarSupportedContent-333" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                            <ul className="navbar-nav ml-auto nav-flex-icons">
                                <li className="nav-item">
                                    <a className="nav-link waves-effect waves-light" type="button"
                                       data-toggle="modal" data-target="#modalInputForm" title="Create New Contact Employee">
                                        <h2><i className="fas fa-plus-square"/></h2>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link waves-effect waves-light" to="/table" type="button"
                                          title="Mode Table View">
                                        <h2><i className="fas fa-table"/></h2>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link waves-effect waves-light" to="/card" type="button"
                                          title="Mode Card View">
                                        <h2><i className="far fa-address-card"/></h2>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
