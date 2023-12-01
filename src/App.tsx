import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { IProduct } from "./interfaces/IProduct";
import "../src/app.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { getProduct } from "./api/product";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProduct()
      .then((res: IProduct[]) => {
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Home />}></Route>
          <Route
            path="/product"
            element={<Product products={products} />}
          ></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
