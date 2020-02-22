import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Table from "./employee/layout/TableEmployee";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {employeeReducer} from "./employee/reducers/EmployeeReducer";
import {createStore} from "redux";
import Card from "./employee/layout/CardEmployee";
import FormInput from "./employee/layout/FormInput";
import LandingPage from "./components/LandingPage";

function App() {
    return (
        <Router>
            <div className="App">
                <div id="preloader">
                    <div className="spinner"/>
                </div>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <div className="container pt-5 w-100">
                        <Provider store={createStore(employeeReducer)}>
                            <Route path="/table" component={Table}/>
                            <Route path="/card" component={Card}/>
                            <FormInput/>
                        </Provider>
                    </div>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
