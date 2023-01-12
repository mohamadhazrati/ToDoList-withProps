import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const Todo = ({ text, setText,todos,setTodos }) => {
  const addTodo = () => {
    if (text.trim()) {
      if (!todos.filter((item) => item.text === text).length) {
        setTodos((last) => [...last, { text: text, status: false }]);
        toast.success("your task added", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("error", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
    setText("");
  };
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Container>
        <Row>
          <Col sm="8">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Todo"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </Form.Group>
          </Col>
          <Col sm={{ offset: 0, span: 2 }}>
            <Button variant="primary" type="submit" onClick={addTodo}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Todo;
