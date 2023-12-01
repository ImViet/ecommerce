import React, { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { IProduct } from "../interfaces/IProduct";
import { getProduct } from "../api/product";

interface Props {
  isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: Props) => {
  const { closeCart, cartItems } = useShoppingCart();

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProduct()
      .then((res: any) => setProducts(res))
      .catch((err) => console.log(err));
  });

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems &&
            cartItems.map((item) => (
              <CartItem key={item.id} id={item.id} quantity={item.quantity} />
            ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
