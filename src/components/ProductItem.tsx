import React from "react";
import { Stack } from "react-bootstrap";
import { IProduct } from "../interfaces/IProduct";
import "../styles/components/productItem.scss";
import formatCurrency from "../utilities/FormatCurrency";
interface Props {
  product: IProduct;
}

const ProductItem = (props: Props) => {
  const { product } = props;
  return (
    <Stack className="product-item" direction="horizontal" gap={3}>
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
