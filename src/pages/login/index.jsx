import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@atlaskit/button";
import Form, {
  Field,
  ErrorMessage,
  FormFooter,
  HelperMessage
} from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import "./style.css";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  onChange = event => {
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

  login = async data => {
    await sleep(500);
    const errors = {
      email: !data.email.includes("@")
        ? "Seu e-mail não é válido. Tente novamente!"
        : undefined
    };
    if (!errors.username && !errors.email) {
      this.props.history.push("/portal");
    }
    return errors;
  };

  handleSubmit = data => {
    return this.login(data);
  };
  render() {
    return (
      <div
        className="login"
        style={{
          display: "flex",
          width: "400px",
          maxWidth: "100%",
          margin: "0 auto",
          flexDirection: "column"
        }}
      >
        <h1>Login</h1>
        <div className="card">
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
                  <Link to="/register">Cadastrar-se</Link>
                  <Button
                    className="btn-margin"
                    type="submit"
                    appearance="primary"
                    isDisabled={!dirty || submitting}
                  >
                    Entrar
                  </Button>{" "}
                </FormFooter>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
