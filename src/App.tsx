import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { IProduct } from "./interfaces/IProduct";
import "../src/styles/app.scss";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ProductDetail from "./pages/ProductDetail";
import { getAllCategory } from "./api/categories";
import { ICategory } from "./interfaces/ICategory";
import { IResponseData } from "./interfaces/IResponseData";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategory()
      .then((res: IResponseData<ICategory[]>) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ShoppingCartProvider>
      <Navbar categories={categories} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Home />}></Route>
          <Route path="/categories/:id/products" element={<Product />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
