import { styled } from "styled-components";
import ProductCard from "../Cart/ProductCard";
import { getFilterProducts } from "../../Slices/filterProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const { filtered_products, filter } = useSelector(
    (store) => store.filteredProducts
  );
  const { isLoading } = useSelector((store) => store.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilterProducts());
  }, [filter]);

  if (isLoading) {
    return (
      <div style={{ height: "30rem", display: "flex" }}>
        <h1 style={{ margin: "auto " }}>Loading...</h1>
      </div>
    );
  }
  return (
    <Wrapper>
      <div className="input-search"></div>
      <div className="sort-wrap"></div>

      {filtered_products.length < 1 ? (
        <h2
          style={{
            margin: "0 auto",
            padding: "1rem 0 0 0",
            textAlign: "center",
          }}
        >
          No Matching Item
        </h2>
      ) : (
        <div className="products-container">
          {filtered_products.map((item, index) => {
            return <ProductCard key={`key${index}`} {...item} />;
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 1rem;
  .products-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    .products-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1440px) {
    .products-container {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default ProductsList;
