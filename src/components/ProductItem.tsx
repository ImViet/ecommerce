import React from "react";
import { Stack } from "react-bootstrap";
import { IProduct } from "../interfaces/IProduct";
import "../styles/components/productItem.scss";
import formatCurrency from "../utilities/FormatCurrency";
import { NavLink } from "react-router-dom";
interface Props {
  product: IProduct;
  hideSuggestion?: () => void;
  setSearchValue?: (value: string) => void;
}

const ProductItem = (props: Props) => {
  const { product, hideSuggestion, setSearchValue } = props;

  const handleClickSuggestion = (productName: string) => {
    if (hideSuggestion) hideSuggestion();
    if (setSearchValue) setSearchValue(productName);
  };
  return (
    <Stack
      as={NavLink}
      to={`/products/${product.id}`}
      className="product-item"
      direction="horizontal"
      gap={3}
      onClick={() => handleClickSuggestion(product.title)}
    >
      <div className="product-item__image">
        <img src={product.images[0]?.imagePath} alt="" />
      </div>
      <div className="product-item__body">
        <div className="product-item__title text-truncate">
          <span>{product.title}</span>
        </div>
        <div className="product-item__price">
          {formatCurrency(product.price)}
        </div>
      </div>
    </Stack>
  );
};

export default ProductItem;
