import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar as NavbarBs,
  Row,
} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useState } from "react";
import { ICategory } from "../../interfaces/ICategory";
import "../../styles/navbar.scss";
import { useAppContext } from "../../context/AppContext";
import { link } from "fs";
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
    <NavbarBs sticky="top" expand="lg" className="bg-white shadow-sm mb-3 p-3">
      <Container className="nav-container">
        <Row className="nav">
          <Col className="nav-mobile">
            <NavbarBs.Toggle
              className="d-inline"
              aria-controls="sidebar"
              onClick={openSideBar}
            />
            {cartQuantity > 0 && (
              <Button
                onClick={openCart}
                // variant="outline-success"
                className="nav-btn__cart"
              >
                <FontAwesomeIcon
                  className="nav-btn__icon"
                  icon={faBagShopping}
                />
                <div className="nav-cart__count">{cartQuantity}</div>
              </Button>
            )}
          </Col>
          <Col className="nav-left">
            <NavbarBs.Toggle
              className="d-inline btn-toggle"
              aria-controls="sidebar"
              onClick={openSideBar}
            />
            <span className="ms-4">CLOTHES STORE</span>
          </Col>
          <Col className="nav-center">
            <Form className="d-flex w-100">
              <Form.Control
                type="search"
                placeholder="Search Products"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Col>
          <Col className="nav-right">
            {cartQuantity > 0 && (
              <Button
                onClick={openCart}
                // variant="outline-success"
                className="nav-btn__cart"
              >
                <FontAwesomeIcon
                  className="nav-btn__icon"
                  icon={faBagShopping}
                />
                <div className="nav-cart__count">{cartQuantity}</div>
              </Button>
            )}
            <Nav>
              <Nav.Link to={`/products`} as={NavLink}>
                Shop
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
              <Nav.Link to={"/about"} as={NavLink}>
                About
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
