import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../utils/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Components";
import { useSelector } from "react-redux";

const SubNavbar = () => {
  const [isSubNavbarOpen, setIsNavbarOpen] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const { total_amount } = useSelector((store) => store.cart);

  return (
    <Wrapper>
      <div className="sub-nav-wrapper">
        {isAuthenticated ? (
          <Link to="/user" style={{ float: "left", padding: "0.5rem" }}>
            <img
              src={user?.picture}
              alt="user-img"
              style={{
                borderRadius: "50%",
                width: "2rem",
                marginRight: "1rem",
              }}
            />
          </Link>
        ) : (
          <div
            className="align-vertical justify-content"
            style={{ display: "flex" }}
          >
            <LoginButton style={{}} />
          </div>
        )}
        <button
          onClick={() => {
            setIsNavbarOpen(!isSubNavbarOpen);
          }}
        >
          {isSubNavbarOpen ? (
            <FontAwesomeIcon icon={faXmark} style={{ width: "22.39px" }} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        {isSubNavbarOpen ? (
          <div className="sub-links">
            {navLinks.map((item, index) => {
              return (
                <Link
                  key={`key:${index}`}
                  to={item.url}
                  className="sub-link"
                  onClick={() => setIsNavbarOpen(false)}
                >
                  {item.text}
                </Link>
              );
            })}
            <Link to="/cart" onClick={() => setIsNavbarOpen(false)}>
              Cart {total_amount ? <span>{total_amount}</span> : null}
            </Link>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  .sub-nav-wrapper {
    display: flex;
  }
  .sub-links {
    position: absolute;
    border-radius: var(--border-radius);
    overflow: hidden;
    top: 3.8rem;
    right: 0.25rem;
    background-color: #24242424;
    z-index: 10;
    box-shadow: rgb(26, 26, 26) 0px 20px 30px -10px;
    backdrop-filter: blur(10px);
    transform-origin: top center;
    animation: showColor 0.3s ease-in-out;
  }
  button {
    padding: 0.5rem;
    margin-bottom: 1rem;
    color: white;
    border: none;
    background-color: transparent;
    font-size: 1.6rem;
  }
  a {
    display: block;
    color: white;
    /* background-color: white; */
    padding: 1rem 2rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
  }
  span {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: red;
    border-radius: 50%;
  }
`;
export default SubNavbar;
