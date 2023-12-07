import React, { useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductCard from "../components/ProductCard";
import { Button, Col, Container, Row } from "react-bootstrap";

interface Props {
  products: IProduct[] | null;
}

const Product = (props: Props) => {
  const { products } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const loadMore = () => {
    setLoading(true);
    setPageIndex(pageIndex + 1);
    console.log(pageIndex);
  };

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
      <div className="btn-loadmore">
        <Button variant="outline-primary" onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </Button>
      </div>
    </Container>
  );
};

export default Product;
