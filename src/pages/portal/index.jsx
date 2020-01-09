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
import Select from "@atlaskit/select";
import "./style.css";
import Navbar from "../../components/navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TextArea from "@atlaskit/textarea";
import styled from "styled-components";
import DynamicTable from "@atlaskit/dynamic-table";
import { head, rows } from "./data-table/table";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Wrapper = styled.div`
  min-width: 600px;
`;

class Portal extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Container className="mt-3" fluid={true}>
          <h2>Novo Post</h2>

          <Form onSubmit={this.handleSubmit}>
            {({ formProps, dirty, submitting }) => (
              <form {...formProps}>
                <Row>
                  <Col xs lg="4">
                    <Select
                      name="type"
                      className="single-select margin-top"
                      classNamePrefix="react-select"
                      placeholder="Selecione o tipo de post"
                      defaultValue=""
                      options={[
                        { label: "Documento", value: "Documento" },
                        { label: "Tutorial", value: "Tutorial" },
                        { label: "Reunião", value: "Reunião" }
                      ]}
                    />
                  </Col>
                  <Col xs lg="8">
                    <Field
                      name="title"
                      label="Digite o título aqui"
                      defaultValue=""
                      isRequired
                    >
                      {({ fieldProps, error }) => (
                        <Fragment>
                          <TextField {...fieldProps} />
                          {error && <ErrorMessage>{error}</ErrorMessage>}
                        </Fragment>
                      )}
                    </Field>
                  </Col>
                  <Col xs lg="12" className="mt-3">
                    <TextArea
                      defaultValue=""
                      placeholder="Digite o conteúdo do post aqui"
                      name="text"
                    />
                    {({ fieldProps, error }) => (
                      <Fragment>
                        <TextField {...fieldProps} />
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                      </Fragment>
                    )}
                  </Col>
                  <Col className="mt-3">
                    <input
                      type="file"
                      name="file"
                      onChange={this.onChangeHandler}
                    />
                  </Col>
                </Row>
                <FormFooter>
                  <Button
                    className="btn-margin"
                    type="submit"
                    appearance="primary"
                    isDisabled={!dirty || submitting}
                  >
                    Salvar
                  </Button>{" "}
                </FormFooter>
              </form>
            )}
          </Form>
          <div>
            <h2>Últimos Posts</h2>
            <div className="card mt-3 mb-3">
              <Wrapper>
                <DynamicTable
                  head={head}
                  rows={rows}
                  rowsPerPage={10}
                  defaultPage={1}
                  loadingSpinnerSize="large"
                  isLoading={false}
                  isFixedSize
                  defaultSortKey="term"
                  defaultSortOrder="ASC"
                  onSort={() => console.log("onSort")}
                  onSetPage={() => console.log("onSetPage")}
                />
              </Wrapper>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Portal;
