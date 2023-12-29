import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductCard from "../components/ProductCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getProductByCategory } from "../api/categories";
import { useParams } from "react-router-dom";
import { IResponseData } from "../interfaces/IResponseData";
import { IPaging } from "../interfaces/IPaging";
import ProductList from "../containers/Product/ProductList";

const Product = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    getProductByCategory(Number(id))
      .then((res: IResponseData<IPaging<IProduct>>) => {
        setProducts(res.data.items);
        setCurrentPage(res.data.currentPage);
        setTotalPage(res.data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const loadMore = async () => {
    setLoading(true);
    var nextPage = currentPage + 1;
    var products = await getProductByCategory(Number(id), nextPage);
    setProducts((currentProduct) => [
      ...currentProduct,
      ...products.data.items,
    ]);
    setCurrentPage(products.data.currentPage);
    setTotalPage(products.data.totalPages);
    setLoading(false);
  };

  return (
    <Container>
      <ProductList products={products} />
      {currentPage === totalPage ? (
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
