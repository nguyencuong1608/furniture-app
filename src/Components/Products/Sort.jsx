import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { updateSortFilter, resetFilter } from "../../Slices/filterProductSlice";

const Sort = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="select-wrap">
        <h5>Sort By:</h5>
        <div className="align-vertical">
          <div className="padding-right-1rem">
            <label>Name </label>
            <select
              id="name"
              name="name"
              onChange={(e) => dispatch(updateSortFilter(e.target.value))}
            >
              {/* <option value="name">Name</option> */}

              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
            </select>
          </div>
          <div>
            <label>Price </label>
            <select
              id="price"
              name="price"
              onChange={(e) => dispatch(updateSortFilter(e.target.value))}
            >
              {/* <option value="price">Price</option> */}
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
            </select>
          </div>
        </div>
      </div>
      <div className="reset-wrap">
        <button
          className="reset-btn padding-left-1rem"
          type="button"
          onClick={() => {
            dispatch(resetFilter());
          }}
        >
          RESET
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 1rem 1rem;
  justify-content: space-between;

  h5 {
    margin: 0 0 0.5rem 0;
    padding-right: 2rem;
  }
  select {
    padding: 0.45rem 0.5rem;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
  }
  .select-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .reset-wrap {
    display: flex;
    align-items: end;
  }
  .reset-btn {
    margin-left: 2rem;
    padding: 0.45rem 0.5rem;
    border-radius: 8px;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    background-color: #ce2424;
    color: white;
    opacity: 0.5;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 1rem 1rem 1rem;
    justify-content: space-between;
    .select-wrap {
      flex-direction: row;
      align-items: center;
    }
    h5 {
      margin: 0;
    }

    .reset-wrap {
      align-items: flex-start;
    }
  }
`;

export default Sort;
