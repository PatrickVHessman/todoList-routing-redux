import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import {useDispatch} from 'react-redux';
import { addItem, removeItem } from '../redux/actions';

const TodoList = (props) => {

  const title = props.title;

  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    setNewItem(val);
  };

  const items = props.items;

  const handleClick = (event) => {
    const id = event.target.id;
    dispatch(removeItem(title,id));
  };

  const handleSubmit = () => {
    if (newItem !== "") {
      dispatch(addItem(title, newItem));
    }
  };

  const handleEnter = (event) => {
    const key = event.key;
    if (key === "Enter" && newItem !== "") {
      props.submitItem(newItem, props.title);
    }
  };

  return (
    <Container>
      <h2>{props.title}</h2>
      <InputGroup>
        <FormControl
          placeholder="New item..."
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleSubmit}>
            +
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {items.map((item) => {
        return (
          <Row key={item}>
            <Col
              name={item}
              id={item}
              onClick={handleClick}
            >
              • {item}
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default TodoList;
