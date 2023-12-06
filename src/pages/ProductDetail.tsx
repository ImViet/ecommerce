import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "../styles/productDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    getProductById(Number(id))
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <Row className="mt-5">
        <Col md={7} sm={12} xs={12}>
          <Carousel interval={null}>
            {product?.images &&
              product.images.map((img) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    // src="https://levents.asia/wp-content/uploads/2023/08/z4740519302008_6d6e4b97604723bdad9f2b9819a142e7-1000x1000.jpg"
                    src={img}
                    alt=""
                    style={{ maxHeight: "700px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </Col>
        <Col md={5} sm={12} xs={12}>
          <div className="product-dt">
            <div className="product-dt__title">{product?.title}</div>
            <div className="product-dt__price">{product?.price} vnđ</div>
            <div className="product-dt__size">
              <span>
                <input type="radio" id="size-s" name="size" />
                <label htmlFor="size-s">Size S</label>
              </span>
              <span>
                <input type="radio" id="size-m" name="size" />
                <label htmlFor="size-m">Size M</label>
              </span>
              <span>
                <input type="radio" id="size-l" name="size" />
                <label htmlFor="size-l">Size L</label>
              </span>
              <span>
                <input type="radio" id="size-xl" name="size" />
                <label htmlFor="size-xl">Size XL</label>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
