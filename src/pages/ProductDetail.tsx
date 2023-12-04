import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const ProductDetail = () => {
  // const { id } = useParams();

  // const [product, setProduct] = useState<IProduct>();

  // useEffect(() => {
  //   getProductById(Number(id))
  //     .then((res) => setProduct(res))
  //     .catch((err) => console.log(err));
  // }, [id]);

  return (
    <Container>
      <Row className="mt-5">
        <Col md={7} sm={12} xs={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/407899444_667916675530278_6912241568112803330_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEW0nbLhf32nhTsaO5BmFoDSeobBPY1CZ5J6hsE9jUJnsiCeI9z73yJcoucpkPByOO75Kas2hdkatT4W1phL96c&_nc_ohc=J8UPxICRiB8AX85K1YA&_nc_ht=scontent.fsgn1-1.fna&oh=00_AfDVQupKQS1KZmSEEO8oD9mQ7cbj7HXwd7yOV4G01q4mRg&oe=65730C86"
                alt=""
                style={{ maxHeight: "700px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={5} sm={12} xs={12}>
          <div className="product-dt">
            <div className="product-dt__title">Sản phẩm a</div>
            <div className="product-dt__price">420000 vnđ</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
