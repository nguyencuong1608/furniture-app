import { styled } from "styled-components";
import { AmountBtn } from "..";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { toggleAmount, removeItem } from "../../Slices/CartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ id, name, color, amount, image, price, stock }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="single-cart">
        <div className="cart-info">
          <img src={image} alt="" />
          <div>
            <h5>{name}</h5>
            <div className="align-vertical">
              <p>Color:</p>
              <span
                style={{ backgroundColor: `${color}`, marginLeft: "0.5rem" }}
              ></span>
            </div>
          </div>
        </div>
        <div className="toggle-amount">
          <button
            type="button"
            onClick={() => {
              if (amount == 1) {
                dispatch(removeItem({ id }));
                return;
              }
              return dispatch(toggleAmount({ id, value: "decrease" }));
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span>{amount}</span>
          <button
            type="button"
            onClick={() => dispatch(toggleAmount({ id, value: "increase" }))}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="price-remove align-vertical">
          <h5>{formatPrice(price)}</h5>
          <button
            className="remove-btn"
            type="button"
            onClick={() => dispatch(removeItem({ id }))}
          >
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: "0.85rem" }} />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #bfbec1;
  margin: 1rem 0;
  .single-cart {
    display: flex;
    justify-content: space-around;
  }
  .cart-info {
    display: flex;
    align-items: center;
    img {
      width: 5rem;
      height: auto;
      border-radius: 0.5rem;
      object-fit: contain;
    }
    h5 {
      padding-left: 1rem;
    }
    p {
      padding-left: 1rem;
      margin: 0;
      display: inline;
    }
    span {
      display: inline-block;
      margin-left: 0.25rem;
      width: 0.25rem;
      height: 0.25rem;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
  .toggle-amount {
    display: none;
    align-items: center;
    justify-content: flex-start;
    span {
      font-size: 1.4rem;
      margin: 0 0.5rem;
    }
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    color: var(--clr-grey-2);
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      color: var(--clr-black);
    }
  }
  .remove-btn {
    &:hover {
      color: var(--clr-red);
    }
  }
  .price-remove {
    display: flex;
    justify-content: flex-end;
    h5 {
      margin: 0;
    }
  }
  @media screen and (min-width: 768px) {
    .single-cart {
      display: grid;
      grid-template-columns: 50% 30% 20%;
    }
    .cart-info {
      display: flex;
      align-items: center;
      img {
        width: 8rem;
        height: 6rem;
        border-radius: 0.5rem;
        object-fit: contain;
      }
    }
    .toggle-amount {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span {
        font-size: 1.4rem;
        margin: 0 0.5rem;
      }
    }
  }
`;
export default CartItem;
