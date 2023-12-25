import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "../styles/productDetail.scss";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { IResponseData } from "../interfaces/IResponseData";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>();

  const { increaseCartQuantity } = useShoppingCart();
  useEffect(() => {
    getProductById(Number(id))
      .then((res: IResponseData<IProduct>) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <Row className="mt-5">
        <Col
          md={8}
          sm={12}
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Carousel interval={null} className="w-75">
            {product?.images &&
              product.images.map((img) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img.imagePath}
                    alt=""
                    style={{ maxHeight: "700px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </Col>
        <Col md={4} sm={12} xs={12}>
          <div className="product-dt">
            <div className="product-dt__title">{product?.title}</div>
            <div className="product-dt__price">{product?.price} vnđ</div>
            <div className="product-dt__size">
              <span>
                <input type="radio" id="size-xs" name="size" />
                <label htmlFor="size-xs">Size XS</label>
              </span>
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
            <div className="cart">
              <Button
                className="cart-btn__addToCart"
                onClick={() => product && increaseCartQuantity(product.id)}
              >
                Add to cart
              </Button>
            </div>
            <div className="shop-ecommerce">
              <ul>
                <span>Buy from ecommerce:</span>
                <li>
                  <a href="#">
                    <img
                      className="shop-ecommerce__icon"
                      src="https://bizweb.dktcdn.net/100/369/010/themes/914385/assets/social_lazada_icon.svg?1701749034231"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="shop-ecommerce__icon"
                      src="https://bizweb.dktcdn.net/100/369/010/themes/914385/assets/social_shopee_icon.svg?1701749034231"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="shop-ecommerce__icon"
                      src="https://bizweb.dktcdn.net/100/369/010/themes/914385/assets/social_tiki_icon.svg?1701749034231"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="product-dt__description">
              <p>
                <strong>Description:</strong>
              </p>
              <p className="detail-description">{product?.description}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
