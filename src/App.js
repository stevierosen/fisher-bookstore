import React, {Component} from 'react';
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import Routes from "./Route";

export default class App extends Component{
  render(){
    return (
    <div className= "App container">
      <Navbar bg="dark" expand ="lg">
        <Navbar.Brand>
          <Link to= "/">Fisher Bookstore</Link>
        </Navbar.Brand>
      </Navbar>
      <Routes />
    </div>
      );
  }
};