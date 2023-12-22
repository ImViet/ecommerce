import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductCard from "../components/ProductCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getProductByCategory } from "../api/categories";
import { useParams } from "react-router-dom";
import { IResponseData } from "../interfaces/IResponseData";
import { IPaging } from "../interfaces/IPaging";

const Product = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<number>(0);

  useEffect(() => {
    getProductByCategory(Number(id))
      .then((res: IResponseData<IPaging<IProduct>>) => {
        setProducts(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const loadMore = () => {
    setLoading(true);
    setPageIndex(pageIndex + 1);
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
