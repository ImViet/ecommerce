import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { IProduct } from "./interfaces/IProduct";
import "../src/styles/app.scss";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { getAllProduct } from "./api/product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getAllProduct()
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
            path="/products"
            element={<Product products={products} />}
          ></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
