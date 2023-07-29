import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../utils/data";
import { Link } from "react-router-dom";
import { useState } from "react";

const SubNavbar = () => {
  const [isSubNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Wrapper>
      <div className="sub-nav-wrapper">
        <button
          onClick={() => {
            setIsNavbarOpen(!isSubNavbarOpen);
          }}
        >
          {isSubNavbarOpen ? (
            <FontAwesomeIcon icon={faXmark} />
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
              Cart
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
`;
export default SubNavbar;
