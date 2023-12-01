import React, { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

interface Props {
  isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: Props) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems &&
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
          <div className="ms-auto fw-bold fs-5">
            Total $
            {cartItems.reduce((total, cartItem) => {
              return total + cartItem.quantity * (cartItem.product?.price || 0);
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
