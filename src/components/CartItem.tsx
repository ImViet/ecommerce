import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack } from "react-bootstrap";
interface Props {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: Props) => {
  const { removeFromCart, cartItems } = useShoppingCart();
  const item = cartItems.find((item) => item.id === id);
  if (item == null) return null;
  return <Stack></Stack>;
};

export default CartItem;
