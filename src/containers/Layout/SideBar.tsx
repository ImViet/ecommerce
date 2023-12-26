import { Offcanvas } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";

interface Props {
  isOpen: boolean;
}

const SideBar = ({ isOpen }: Props) => {
  const { closeSideBar } = useAppContext();
  return (
    <Offcanvas
      id="sidebar"
      placement="start"
      show={isOpen}
      onHide={closeSideBar}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
