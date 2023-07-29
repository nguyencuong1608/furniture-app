import { styled } from "styled-components";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const amountBtn = ({ amount, stock, setAmount }) => {
  return (
    <Wrapper>
      <h4>QUANTITY</h4>
      <div className="amount">
        <button
          type="button"
          className="amount-btn"
          onClick={() => {
            if (amount == 1) return;
            setAmount(amount - 1);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span style={{ textAlign: "center", padding: 0, fontSize: "1.4rem" }}>
          {amount}
        </span>
        <button
          type="button"
          className="amount-btn"
          onClick={() => {
            if (amount == stock) return;
            setAmount(amount + 1);
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .amount {
    display: flex;
    justify-content: space-between;
  }
  .amount-btn {
    padding: 0.75rem;
    color: var(--clr-black);
    background-color: #cacaca;
    border-radius: 0.25rem;
    border: none;
  }
`;

export default amountBtn;
