import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { updateFilter } from "../../Slices/filterProductSlice";
import { getUniqueValue, formatPrice } from "../../utils/helper";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const FilterList = () => {
  const { allProducts, isLoading } = useSelector((store) => store.allProducts);
  const {
    filtered_products,
    products,
    filter,
    filter: {
      category,
      color,
      company,
      price,
      min_price,
      max_price,
      isShipping,
    },
  } = useSelector((store) => store.filteredProducts);

  const dispatch = useDispatch();
  const categories = getUniqueValue(products, "category");
  const colors = getUniqueValue(products, "colors");
  const companies = getUniqueValue(products, "company");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <div className="form-content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Category */}
          <div className="form-control">
            <h5>CATEGORY</h5>
            <div className="btn-container">
              {categories.map((item, index) => {
                return (
                  <button
                    key={`btn${index}`}
                    className={`filter-btn ${
                      category === item.toLowerCase() ? "btn-active" : null
                    }`}
                    name="category"
                    type="button"
                    onClick={(e) => {
                      window.scrollTo(0, 150);
                      dispatch(
                        updateFilter({
                          name: e.target.name,
                          value: e.target.textContent,
                        })
                      );
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {/* company */}
          <div className="form-control">
            <h5>COMPANY</h5>
            <div>
              {companies.map((item, index) => {
                return (
                  <button
                    key={`btn${index}`}
                    className={`filter-btn ${
                      company === item.toLowerCase() ? "btn-active" : null
                    }`}
                    name="company"
                    type="button"
                    onClick={(e) => {
                      window.scrollTo(0, 150);
                      dispatch(
                        updateFilter({
                          name: e.target.name,
                          value: e.target.textContent,
                        })
                      );
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {/* color */}
          {/* <div className="form-control">
            <h5>COLOR</h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "0.5rem",
              }}
            >
              {colors.map((item, index) => {
                return (
                  <button
                    key={`btn${index}`}
                    className={` ${
                      color === item.toLowerCase() ? "color-active" : null
                    }`}
                    style={
                      item == "all"
                        ? {
                            color: "black",
                            border: "none",
                            backgroundColor: "white",
                            cursor: "pointer",
                            fontSize: "1rem",
                            paddingRight: "0.25rem",
                            opacity: "0.5",
                          }
                        : {
                            backgroundColor: `${item == "all" ? null : item}`,
                            padding: "0.6rem",
                            margin: "0 4px",
                            borderRadius: "50%",
                            border: "none",
                            opacity: "0.8",
                            cursor: "pointer",
                          }
                    }
                    name="color"
                    type="button"
                    onClick={(e) => {
                      window.scrollTo(0, 150);
                      dispatch(
                        updateFilter({
                          name: e.target.name,
                          value: item,
                        })
                      );
                    }}
                  >
                    {item == "all" ? "All" : null}
                  </button>
                );
              })}
            </div>
          </div> */}
          {/* Free Shipping */}
          <div className="form-control">
            <label
              htmlFor="shipping"
              style={{ display: "inline-block", paddingRight: "1rem" }}
            >
              {" "}
              <h5>FREE SHIPPING</h5>
            </label>
            <input
              type="checkbox"
              id="shipping"
              name="shipping"
              value={isShipping}
              onChange={(e) => {
                window.scrollTo(0, 150);
                dispatch(
                  updateFilter({ name: e.target.name, value: e.target.value })
                );
              }}
            />
          </div>
          <div className="form-control">
            <h5>
              <label htmlFor="price">Price</label>
            </h5>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={(e) => {
                window.scrollTo(0, 150);
                dispatch(
                  updateFilter({ name: e.target.name, value: e.target.value })
                );
              }}
            />
          </div>
          <span style={{ paddingRight: "1rem" }}>{formatPrice(price)}</span>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 5rem;
  /* background-color: red; */
  h5 {
    margin: 1rem 0 0.5rem 0;
  }
  .btn-container {
    /* display: flex;
    flex-direction: column; */
  }
  .filter-btn {
    display: block;
    cursor: pointer;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    padding: 0.25rem 0;
    border-radius: 8px;
    color: #3b3b3b;
    text-transform: capitalize;
  }
`;

export default FilterList;
