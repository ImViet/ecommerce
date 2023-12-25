import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../utilities/FormatCurrency";
import "../styles/cart.scss";
interface Props {
  isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: Props) => {
  const { closeCart, cartQuantity, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartQuantity === 0 ? (
          "Empty"
        ) : (
          <Stack className="justify-content-between h-100" gap={3}>
            <div className="cart-items">
              {cartItems &&
                cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <div className="me-auto fw-bold fs-5 cart-total">
              <span className="cart-total__label p-1">Total</span>
              <span className="cart-total__money">
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    return (
                      total + cartItem.quantity * (cartItem.product?.price || 0)
                    );
                  }, 0)
                )}
              </span>
            </div>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
