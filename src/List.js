import React from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const List = ({ todos, setTodos }) => {
  const changeStatus = (index) => {
    setTodos((last) => {
      const help = JSON.parse(JSON.stringify(last));
      help[index].status = !help[index].status;
      return [...help];
    });
  };
  const removeTodo = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos((last) => {
          const help = [...last];
          help.splice(index, 1);
          return [...help];
        });
        toast.success("deleted", {
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
    });
  };
  return (
    <Container>
      <Row>
        {todos.map((item, index) => {
          return (
            <Col xs="4" key={index}>
              <Card
                bg={item.status ? "success" : "danger"}
                style={{ width: "12rem" }}
                className="mb-2"
              >
                <Card.Body>
                  <Card.Text>{item.text}</Card.Text>
                  <CloseButton onClick={() => removeTodo(index)} />
                  <Button
                    variant={item.status ? "danger" : "success"}
                    onClick={() => changeStatus(index)}
                  >
                    {item.status ? "undone" : "done"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default List;
