import { Offcanvas, Stack } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import { ICategory } from "../../interfaces/ICategory";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  categories: ICategory[];
}

const SideBar = ({ isOpen, categories }: Props) => {
  const { closeSideBar } = useAppContext();
  return (
    <Offcanvas
      id="sidebar"
      placement="start"
      show={isOpen}
      onHide={closeSideBar}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          <div className="p-1">Shop By Category</div>
          <div className="p-1">
            <Menu>
              {categories &&
                categories.map((cate) => (
                  <MenuItem
                    component={
                      <Link
                        to={`categories/${cate.categoryId}/products`}
                        onClick={closeSideBar}
                      ></Link>
                    }
                  >
                    {cate.categoryName}
                  </MenuItem>
                ))}
            </Menu>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
