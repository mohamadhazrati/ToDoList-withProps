import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Todo from "./Todo";
import List from "./List";
import Box from "./Box";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <ToastContainer />
      <Box>
        <Todo text={text} setText={setText} todos={todos} setTodos={setTodos} />
      </Box>
      <Box color="white">
        <List todos={todos} setTodos={setTodos} />
      </Box>
    </div>
  );
}

export default App;
