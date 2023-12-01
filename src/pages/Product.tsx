import React from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
interface Props {
  products: IProduct[] | null;
}

const Product = (props: Props) => {
  const { products } = props;
  return (
    <Container>
      <Row md={2} xs={1} lg={4}>
        {products &&
          products.map((product) => (
            <Col className="mb-1" sm="3" key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Product;
