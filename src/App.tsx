import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;
