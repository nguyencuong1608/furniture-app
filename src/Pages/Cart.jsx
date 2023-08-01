import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { CartItem } from "../Components";
import { useEffect } from "react";
import {
  totalAmount,
  totalPrice,
  getCartLocalStorage,
} from "../Slices/CartSlice";
import { formatPrice } from "../utils/helper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import img2 from "../assets/hero-image/img15.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Components";
import { AnimatePresence, motion } from "framer-motion";

const Cart = () => {
  const { products, total_price, total_amount } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    dispatch(totalAmount());
    dispatch(totalPrice());
  }, [products]);

  return (
    <Wrapper
      initial={{ filter: "blur(4px) " }}
      animate={{ filter: "blur(0) " }}
      exit={{
        filter: "blur(4px)",
        transition: { duration: 0.01 },
      }}
    >
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-wrapper">
            <h1>Shopping Cart</h1>
            <hr />
            {products.length < 1 ? (
              <div className="empty-cart">
                <h2 className="empty-cart-header">YOUR CART IS EMPTY</h2>
              </div>
            ) : (
              // Cart Item
              <div className="cart-items ">
                {products.map((product, index) => {
                  return <CartItem key={`id: ${index}`} {...product} />;
                })}
              </div>
            )}
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <Link to="/products">
              <FontAwesomeIcon icon={faArrowLeftLong} />
              <span>Back To Shop</span>
            </Link>
          </div>
        </div>
        <div className="cart-summary">
          <h2>Summary</h2>
          <hr />
          <div className="cart-summary-body">
            <div className="price-wrap align-vertical content-space-between ">
              <h4>Items {total_amount}</h4>
              <h4>{formatPrice(total_price)}</h4>
            </div>
            <h4 className="shipping-cart">Shipping $15</h4>
          </div>
          {isAuthenticated ? (
            <div className="total-price align-vertical content-space-between">
              <h4>TOTAL PRICE</h4>
              <h4>{total_price ? formatPrice(total_price + 1500) : 0}</h4>
            </div>
          ) : (
            <div>
              <h4 style={{ textAlign: "center", width: "100%" }}>
                Login to view total price
              </h4>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <LoginButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  background-image: url(${img2});
  min-height: 95vh;
  .cart-container {
    margin: -5rem auto 0;
    width: 95vw;
    padding: 10rem 0 14rem 0;
    min-height: 60vh;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
  }
  .cart-content {
    background-color: #f0f0f0ea;
    padding: 3rem 2rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    backdrop-filter: blur(8px);
  }
  .price-wrap {
    margin-top: 1rem;
  }
  a {
    color: #4f4f4f;
    transition: all 0.3s ease;
    span {
      padding-left: 0.5rem;
    }
    &:hover {
      color: var(--clr-red);
      opacity: 1;
    }
  }
  .cart-items {
    min-height: 18rem;
  }
  h1 {
    font-weight: 600;
    margin-bottom: 3rem;
  }
  h2 {
    margin-bottom: 3rem;
    line-height: 1.5;
  }
  h4 {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  .empty-cart {
    height: 20rem;
    display: flex;
  }
  .empty-cart-header {
    margin: auto;
    text-align: center;
  }
  .shipping-cart {
    text-align: end;
    padding-bottom: 0.5rem;
  }

  .cart-summary {
    background-color: var(--clr-grey);
    padding: 3rem 4rem;
    color: #4f4f4f !important;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .cart-summary-body {
    height: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .total-price {
    padding-top: 0.5rem;
    border-top: 1px solid #bfbec1;
  }
  @media screen and (min-width: 1024px) {
    .cart-container {
      width: 95vw;
      padding: 10rem 0 14rem 0;
      min-height: 60vh;
      border-radius: 1rem;
      grid-template-columns: 66.67% 33.33%;
    }
    .cart-content {
      padding: 3rem 6rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 0;
      border-bottom-left-radius: 1rem;
    }
    .cart-summary {
      border-top-left-radius: 0;
      border-top-right-radius: 1rem;
      border-bottom-left-radius: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    .cart-container {
      width: 70vw;
      padding: 10rem 0 14rem 0;
      min-height: 60vh;
      border-radius: 1rem;
      grid-template-columns: 66.67% 33.33%;
    }
    .cart-content {
      padding: 3rem 4rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 0;
      border-bottom-left-radius: 1rem;
    }
    .cart-summary {
      border-top-left-radius: 0;
      border-top-right-radius: 1rem;
      border-bottom-left-radius: 0;
    }
  }
`;

export default Cart;
