import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import Button from "@atlaskit/button";
import Form, {
  Field,
  ErrorMessage,
  FormFooter,
  HelperMessage
} from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import FieldText, { FieldTextStateless } from "@atlaskit/field-text";
import "./style.css";
import Navbar from "../../components/navbar";
import Container from "react-bootstrap/Container";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Container fluid={true}></Container>
      </div>
    );
  }
}
export default Portal;
