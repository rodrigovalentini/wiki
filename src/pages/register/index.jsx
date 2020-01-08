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
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onChange = event => {
    console.log(this.state);
    this.setState({
      eventResult: `onChange called with value: ${event.target.value}`
    });
  };

  onBlur = () => {
    this.setState({
      eventResult: "onBlur called from FieldBase above"
    });
  };

  onFocus = () => {
    this.setState({
      eventResult: "onFocus called from FieldBase above"
    });
  };

  createUser = async data => {
    await sleep(500);
    const errors = {
      email: !data.email.includes("@")
        ? "Seu e-mail não é válido. Tente novamente!"
        : undefined
    };
    if (!errors.username && !errors.email) {
      console.log(data);
    }
    return errors;
  };

  handleSubmit = data => {
    return this.createUser(data);
  };
  render() {
    return (
      <div
        className="register"
        style={{
          display: "flex",
          width: "400px",
          maxWidth: "100%",
          margin: "0 auto",
          flexDirection: "column"
        }}
      >
        <h1>Cadastro</h1>
        <Form onSubmit={this.handleSubmit}>
          {({ formProps, dirty, submitting }) => (
            <form {...formProps}>
              <Field name="email" label="Email" defaultValue="" isRequired>
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {!error && <HelperMessage>Deve contar @</HelperMessage>}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                  </Fragment>
                )}
              </Field>
              <Field
                name="password"
                defaultValue=""
                label="Digite sua senha"
                isRequired
                type="password"
              >
                {({ fieldProps, error, valid }) => (
                  <TextField {...fieldProps} />
                )}
              </Field>
              <FormFooter>
                <Link to="/login"> Já tenho conta</Link>
                <Button
                  type="submit"
                  appearance="primary"
                  isDisabled={!dirty || submitting}
                >
                  Criar conta
                </Button>{" "}
              </FormFooter>
            </form>
          )}
        </Form>
      </div>
    );
  }
}
export default Register;
