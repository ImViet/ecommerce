import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Navbar from "./containers/Layout/Navbar";
import Product from "./pages/Product";
import "../src/styles/app.scss";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ProductDetail from "./pages/ProductDetail";
import { getAllCategory } from "./api/categories";
import { ICategory } from "./interfaces/ICategory";
import { IResponseData } from "./interfaces/IResponseData";
import SideBar from "./containers/Layout/SideBar";
import { AppProvider } from "./context/AppContext";

function App() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategory()
      .then((res: IResponseData<ICategory[]>) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppProvider>
      <ShoppingCartProvider>
        <Navbar categories={categories} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<Home />}></Route>
            <Route
              path="/categories/:id/products"
              element={<Product />}
            ></Route>
            <Route path="/products" element={<Product />}></Route>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </AppProvider>
  );
}

export default App;
