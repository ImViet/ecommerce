import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button, Stack } from "react-bootstrap";
import { ICartItem } from "../interfaces/ICart";
import { getProduct } from "../api/product";
import { IProduct } from "../interfaces/IProduct";
interface Props {
  cartItem: ICartItem;
}

const CartItem = ({ cartItem }: Props) => {
  const { removeFromCart } = useShoppingCart();

  if (cartItem.product === undefined) return null;
  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={3}>
      <img
        src={cartItem.product.images[0]}
        alt=""
        style={{ width: "75px", height: "75px", objectFit: "contain" }}
      />
      <div className="me-auto">
        <div>
          {cartItem.product.title}{" "}
          {cartItem.quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.85rem" }}>
              x{cartItem.quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.90rem" }}>
          ${cartItem.product.price}
        </div>
      </div>
      <div className="p-2">${cartItem.product.price * cartItem.quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(cartItem.id)}
      >
        x
      </Button>
    </Stack>
  );
};

export default CartItem;
