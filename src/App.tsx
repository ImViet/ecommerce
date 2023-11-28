import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
