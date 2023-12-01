import React from "react";
import { Button, Card } from "react-bootstrap";
import { IProduct } from "../interfaces/IProduct";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  product: IProduct;
}

const ProductCard = (props: Props) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const { product } = props;
  const quantity = getItemQuantity(product.id);
  return (
    <Card key={product.id}>
      <Card.Img
        variant="top"
        src={product.images ?? "../img/no-image.png"}
        style={{ objectFit: "cover", height: "250px" }}
      />
      <Card.Body>
        <Card.Title title={product.title} className="text-truncate">
          <span>{product.title}</span>
        </Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <div className="">
          {quantity === 0 ? (
            <Button
              className="w-100"
              variant="outline-primary"
              onClick={() => increaseCartQuantity(product.id)}
            >
              + Add to cart
            </Button>
          ) : (
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="mb-2">
                <Button onClick={() => decreaseCartQuantity(product.id)}>
                  -
                </Button>
                <span className="mx-1">
                  <strong>{quantity}</strong> in cart
                </span>
                <Button onClick={() => increaseCartQuantity(product.id)}>
                  +
                </Button>
              </div>
              <Button
                variant="outline-danger"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
