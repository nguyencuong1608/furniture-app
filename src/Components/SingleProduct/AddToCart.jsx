import { styled } from "styled-components";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addCartItem } from "../../Slices/CartSlice.jsx";
import { AmountBtn } from "../index.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ id, colors, stock, images, name, price }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [amount, setAmount] = useState(1);
  const [productColor, setProductColor] = useState(colors[0]);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button
        type="button"
        className="add-btn"
        onClick={() => {
          dispatch(
            addCartItem({
              id,
              productColor,
              amount,
              stock,
              images,
              name,
              price,
            })
          );
        }}
      >
        Add To Cart
      </button>
      <button
        type="button"
        className="color-btn"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>
          Option{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ paddingLeft: "0.25rem", fontSize: "0.5rem" }}
          />
        </span>
      </button>
      <div className="options-wrap">
        <div
          className="color-items"
          style={{ display: `${showOptions ? "flex" : "none"}` }}
        >
          <AmountBtn {...{ amount, stock, setAmount }} />

          {/* COLOR BTN */}
          <div>
            {colors.map((color, index) => (
              <div
                className="color-item"
                key={`key${index}`}
                style={{
                  backgroundColor: `${color}`,
                  border: `${
                    productColor === color ? "2px solid #2c2c2c" : "none"
                  }`,
                }}
                onClick={() => setProductColor(color)}
              >
                {" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  border-radius: 0.5rem;
  display: inline;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  position: relative;
  background-color: transparent;
  button {
    border: none;
    padding: 1rem 3rem;
    color: var(--clr-white);
    cursor: pointer;
  }
  .add-btn {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background-color: black;
    font-size: 1rem;
  }
  .color-btn {
    background-color: #cacaca;
    color: var(--clr-black);
    padding: 1rem 1.5rem;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    font-size: 1rem;
    position: relative;
  }
  .options-wrap {
    display: grid;
    width: auto;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    top: 1rem;
    left: 0;
  }
  span {
    display: flex;
    align-items: center;
  }
  .color-items {
    position: absolute;
    top: 3.2rem;
    left: 0;
    transform-origin: top center;
    animation: showColor 0.2s ease-out;
  }
  .color-item {
    margin: 0.25rem 0 0 3rem;
    padding: 1rem 3.3rem;
    border-radius: 0.25rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .amount {
    display: flex;
    justify-content: space-between;
  }
  .amount-btn {
    padding: 0.75rem;
    color: var(--clr-black);
    background-color: #cacaca;
    border-radius: 0.25rem;
  }
`;

export default AddToCart;
