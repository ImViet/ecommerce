import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button, Stack } from "react-bootstrap";
import { ICartItem } from "../interfaces/ICart";
import { Link } from "react-router-dom";
import formatCurrency from "../utilities/FormatCurrency";
interface Props {
  cartItem: ICartItem;
}

const CartItem = ({ cartItem }: Props) => {
  const { closeCart, removeFromCart } = useShoppingCart();

  if (cartItem.product === undefined) return null;
  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={3}>
      <Link to={`/products/${cartItem.id}`} onClick={closeCart}>
        <img
          src={cartItem.product.images[0].imagePath}
          alt=""
          style={{ width: "75px", height: "75px", objectFit: "contain" }}
        />
      </Link>
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
          {formatCurrency(cartItem.product.price)}
        </div>
      </div>
      <div className="p-2">
        {formatCurrency(cartItem.product.price * cartItem.quantity)}
      </div>
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
