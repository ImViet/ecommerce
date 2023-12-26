import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button, Nav, NavDropdown, Navbar as NavbarBs } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useState } from "react";
import { ICategory } from "../../interfaces/ICategory";
import "../../styles/navbar.scss";
import { useAppContext } from "../../context/AppContext";
interface Props {
  categories: ICategory[];
}

const Navbar = (props: Props) => {
  const { categories } = props;

  const { openCart, cartQuantity } = useShoppingCart();
  const { openSideBar } = useAppContext();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <NavbarBs sticky="top" expand="lg" className="bg-white shadow-sm mb-3">
      <Container>
        <NavbarBs.Toggle
          className="d-inline"
          aria-controls="sidebar"
          onClick={openSideBar}
        />
        <Nav>
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
          <NavDropdown
            title="Shop"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            show={showDropdown}
          >
            {showDropdown &&
              categories &&
              categories.map((cate) => (
                <NavDropdown.Item
                  to={`categories/${cate.categoryId}/products`}
                  as={NavLink}
                  key={cate.categoryId}
                >
                  {cate.categoryName}
                </NavDropdown.Item>
              ))}
          </NavDropdown>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            variant="outline-success"
            className="rounded-circle"
            style={{ width: "3rem", height: "3rem", position: "relative" }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "1.5rem",
                height: "1.5rem",
                transform: "translate(25%, 25%)",
                color: "#fff",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
