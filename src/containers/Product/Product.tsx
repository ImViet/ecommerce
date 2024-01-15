import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductList from "./List/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/stores";
import { getProduct } from "./reducer";
import { IQueryProductModel } from "../../interfaces/Product/IQueryProductModel";
const Product = () => {
  const { id } = useParams();
  const defaultQuery: IQueryProductModel = {
    pageIndex: 1,
  };
  // const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [totalPage, setTotalPage] = useState<number | undefined>(1);

  const { products } = useSelector((state: RootState) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      dispatch(getProduct(defaultQuery));
    }
  }, []);

  useEffect(() => {
    setCurrentPage(products?.currentPage);
    setTotalPage(products?.totalPages);
  }, [products]);

  const loadMore = async () => {
    setLoading(true);
    defaultQuery.pageIndex = currentPage !== undefined ? currentPage + 1 : 0;
    dispatch(getProduct(defaultQuery));
    setLoading(false);
  };

  return (
    <Container>
      <ProductList products={products?.items} />
      {currentPage === totalPage || products?.items.length === 0 ? (
        ""
      ) : (
        <div className="btn-loadmore">
          <Button
            variant="outline-primary"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Product;
