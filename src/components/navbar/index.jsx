import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import "./style.css";
import Modal, { ModalTransition } from "@atlaskit/modal-dialog";
import { Link, withRouter } from "react-router-dom";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { isOpen: false };

  redirect = async data => {
    await sleep(500);
    this.props.history.push("/login");
  };

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const actions = [
      { text: "Não", onClick: this.close },
      { text: "Sim", onClick: this.redirect }
    ];
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
            <button id="btn-no-style"> Rodrigo Valentini</button>
          </div>
        </Col>
        <Col xs lg="1">
          <div className="text-center">
            <button onClick={this.open} id="btn-no-style">
              Sair
            </button>
            <ModalTransition>
              {isOpen && (
                <Modal
                  actions={actions}
                  onClose={this.close}
                  heading="Deseja fazer logoff no sistema?"
                ></Modal>
              )}
            </ModalTransition>
          </div>
        </Col>
      </Navbar>
    );
  }
}
export default withRouter(NavBar);
