import { styled } from "styled-components";
import { Sort } from "../Components";
import img8 from "../assets/hero-image/img20.jpg";
import { FilterList, ProductsList } from "../Components";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Products = () => {
  const { isError, errorMsg } = useSelector((store) => store.allProducts);
  if (isError) {
    return (
      <Wrapper>
        <div className="header-img">
          <img src={img8} alt="" />
          <h2>Expore Our Products</h2>
        </div>
        <div className="products-wrap section-center">
          <aside className="filter-contents">
            <FilterList />
          </aside>
          <div className="products-content">
            <h2 className=" " style={{ textAlign: "center" }}>
              {errorMsg}
            </h2>
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="header-img">
        <img src={img8} alt="" />
        <h2>Expore Our Products</h2>
      </div>
      <div className="products-wrap section-center">
        <aside className="filter-contents">
          <FilterList />
        </aside>
        <div className="products-content">
          <Sort />
          <ProductsList />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  position: relative;
  margin-top: -5rem;
  margin-bottom: 10rem;

  .header-img {
    position: relative;
    border-radius: 0% 0% 3% 3% / 10% 0% 4% 4%;
    overflow: hidden;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */

    img {
      width: 100vw;
      height: 22rem;
      object-fit: cover;
      /* filter: brightness(0.8); */
    }
    h2 {
      position: absolute;
      top: 70%;
      left: 35%;
      transform: translate(-50%, -50%);
      color: var(--clr-white);
      letter-spacing: 0.5rem;
      font-size: 3rem;
      font-weight: 400;
      text-shadow: 0 0 3px #1e4c52, 0 0 2px #000000;
      font-size: 1.75rem;
    }
  }

  .products-wrap {
    display: grid;
    padding: 2rem 0.5rem 0;
    grid-template-columns: 1fr;
    gap: 5rem 0;
    .filter-contents {
      width: 100%;
      height: auto;
    }
    .products-content {
      width: 100%;
      height: auto;
    }
  }
  .section-center {
    width: 95vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  @media screen and (min-width: 768px) {
    .header-img {
      h2 {
        position: absolute;
        top: 70%;
        left: 35%;
        font-size: 1.75rem;
      }
    }
    .section-center {
      width: 95vw;
      margin: 0 auto;
      max-width: var(--max-width);
    }
  }

  @media screen and (min-width: 768px) {
    .products-wrap {
      display: grid;
      padding: 2rem 2rem 0;
      grid-template-columns: 200px 1fr;
    }
  }

  @media screen and (min-width: 992px) {
    .header-img {
      h2 {
        position: absolute;
        top: 70%;
        left: 50%;
        font-size: 1.75rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .header-img {
      h2 {
        position: absolute;
        top: 70%;
        left: 50%;
        font-size: 2.5rem;
      }
    }
  }
`;
export default Products;
