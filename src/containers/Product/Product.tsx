import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductList from "./List/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/stores";
import { clearProduct, getProduct } from "./reducer";
import { IQueryProductModel } from "../../interfaces/Product/IQueryProductModel";
const Product = () => {
  const { id } = useParams();
  const defaultQuery: IQueryProductModel = {
    pageIndex: 1,
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [totalPage, setTotalPage] = useState<number | undefined>(1);
  const { products } = useSelector((state: RootState) => state.productReducer);
  const [query, setQuery] = useState(
    products
      ? { ...defaultQuery, pageIndex: products.currentPage }
      : defaultQuery
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (id !== undefined && id !== query.categoryId?.toString()) {
      setQuery((query) => ({
        ...query,
        categoryId: Number(id),
        pageIndex: 1,
      }));
    } else {
      setQuery((query) => ({ ...query, categoryId: undefined, pageIndex: 1 }));
    }
  }, [id]);

  useEffect(() => {
    // dispatch(clearProduct());
    dispatch(getProduct(query));
  }, [query]);

  useEffect(() => {
    setCurrentPage(products?.currentPage);
    setTotalPage(products?.totalPages);
  }, [products]);

  const loadMore = async () => {
    setLoading(true);
    setQuery((query) => ({
      ...query,
      pageIndex:
        products?.currentPage !== undefined ? products?.currentPage + 1 : 1,
    }));
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
