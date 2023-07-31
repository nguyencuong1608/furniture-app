import { useEffect } from "react";
import { getSingleProduct } from "../Slices/SingleProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { formatPrice } from "../utils/helper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Loading from "../Components/SingleProduct/Loading";
import AddToCart from "../Components/SingleProduct/AddToCart";
import Error from "./Error";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const { product, isLoading, isError, errorMsg } = useSelector(
    (store) => store.singleProduct
  );

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSingleProduct(productId));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMsg={errorMsg} />;
  }

  const {
    category,
    id,
    colors,
    company,
    description,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
  } = product;
  const mainImg = images[0].url;

  return (
    <Wrapper>
      <div className=" section section-center">
        <div className="container">
          <div className="img-wrapper">
            <img src={mainImg} alt="" />
          </div>
          <div className="product-content">
            <>
              <p>
                <b>{`${company} `}</b>
                {`/ ${category}`}
              </p>
              <h1>{name}</h1>
              <p style={{ color: "#555555" }}>{description}</p>

              <div className="product-info">
                <b>{`Available : `}</b>
                <span> {stock}</span>
              </div>
              <div className="product-info">
                <b>Reviews </b>
                <span>{`: ${stars}/5`}</span>
              </div>

              <div className="product-info">
                <b>Price:</b> <span>{formatPrice(price)}</span>
              </div>
            </>
            <div className="add-to-cart">
              {stock ? (
                <AddToCart {...product} />
              ) : (
                <div className="out-stock">Out Of Stock</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
    padding: 2rem 0 12rem;

    .img-wrapper {
    }
    img {
      width: 100%;
      height: auto;
      margin-bottom: 2rem;
      object-fit: contain;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
    .product-content {
      padding-left: 2rem;
      p {
        display: inline-block;
        margin: 0 0 1rem 0;
        color: var(--clr-black);
      }
      h1 {
        font-size: 3rem;
        margin: 0.5rem 0 2rem 0;
      }
      h5 {
        font-size: 0.85rem;
      }
      span {
        padding-left: 0.5rem;
        font-weight: 400;
      }
      .product-info {
        margin-bottom: 0.25rem;
      }
    }
    .out-stock {
      padding: 1.5rem 0 0 0;
      color: #555555cc;
      font-size: 2rem;
    }
    .add-to-cart {
      margin-top: 2rem;
    }
  }
  @media screen and (min-width: 996px) {
    .container {
      grid-template-columns: 1fr 1fr;
      padding: 2rem 2rem 0;
      height: 85vh;
      .img-wrapper {
        padding-right: 2rem;
      }
      img {
        width: 100%;
        max-height: 30rem;
        object-fit: cover;
        margin-top: 2rem;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    .container {
      grid-template-columns: 1fr 1fr;
      padding: 2rem 12rem 0;
      height: 85vh;
      .img-wrapper {
        padding-right: 2rem;
      }
      img {
        width: 100%;
        height: 36rem;
        margin-top: 0rem;
        object-fit: cover;
      }
    }
  }
`;

export default SingleProduct;
