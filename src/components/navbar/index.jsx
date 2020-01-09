import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./style.css";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar expand="lg" variant="light" id="nav">
        <Navbar.Brand id="title-nav">Wiki</Navbar.Brand>
        <Col xs lg="3"></Col>
        <Col xs lg="1">
          <div className="text-center">
            <p>15</p>
            <span>Páginas</span>
          </div>
        </Col>
        <Col xs lg="1">
          <div className="text-center">
            <p>139</p>
            <span>Documentos</span>
          </div>
        </Col>

        <Col xs lg="1">
          <div className="text-center">
            <p>71</p>
            <span>Tutorias</span>
          </div>
        </Col>
        <Col xs lg="1">
          <div className="text-center">
            <p>521</p>
            <span>Reuniões</span>
          </div>
        </Col>
        <Col xs lg="2"></Col>
        <Col xs lg="1">
          <div className="text-center">
            <button>Rodrigo Valentini</button>
          </div>
        </Col>
        <Col xs lg="1">
          <div className="text-center">
            <button>Sair</button>
          </div>
        </Col>
      </Navbar>
    );
  }
}
export default NavBar;
