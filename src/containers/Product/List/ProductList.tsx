import React from "react";
import { IProduct } from "../../../interfaces/IProduct";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../../components/ProductCard";

interface Props {
  products: IProduct[] | undefined;
}

const ProductList = (props: Props) => {
  const { products } = props;
  return (
    <Row md={2} sm={1} lg={3} xl={4}>
      {products &&
        products.map((product) => (
          <Col className="mb-1" sm="3" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
    </Row>
  );
};

export default ProductList;
