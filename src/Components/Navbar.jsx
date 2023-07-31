import React, { useEffect } from "react";
import { styled } from "styled-components";
import logo from "../assets/logo-300x89.png";
import logo2 from "../assets/logo2.png";
import { Link, useLocation } from "react-router-dom";
import Cart from "../Pages/Cart";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { totalAmount } from "../Slices/CartSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SubNavbar from "./SubNavbar";
import { navLinks } from "../utils/data";
import { LoginButton, LogoutButton } from "../Components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { total_amount, products } = useSelector((store) => store.cart);
  const location = useLocation();
  const isHomePage = location.pathname == "/";

  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalAmount());
  }, [total_amount, products]);

  return (
    <Wrapper>
      <nav id="sidebar" className="nav-container section-center">
        <div className="nav-grid">
          <div className="nav-logo align-vertical">
            <Link to="/">
              <img src={isHomePage ? logo2 : logo} alt="" />
            </Link>
          </div>

          {/* NavLinks */}
          <ul className="nav-links">
            {navLinks.map((item) => {
              return (
                <li className={`nav-link-item align-vertical `} key={item.id}>
                  <NavLink
                    id=""
                    to={item.url}
                    className={`${
                      isHomePage ? "color-white" : "color-black"
                    } nav-link`}
                  >
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="sub-nav">
            <SubNavbar />
          </div>
          <div className="cart-container align-vertical">
            {isAuthenticated ? (
              <Link to="/user">
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
              <LoginButton />
            )}

            <NavLink
              to="/cart"
              className={`${
                isHomePage ? "color-white" : "color-black"
              } cart-link`}
            >
              <FontAwesomeIcon
                style={{ padding: "0.5rem 0.65rem", borderRadius: "1rem" }}
                icon={faCartShopping}
                className={`cart-icon`}
              ></FontAwesomeIcon>
              <div className="cart-amount-icon">{total_amount}</div>
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  z-index: 9;
  .nav-container {
    display: flex;
    align-items: center;

    img {
      width: 8rem;
    }
    .nav-grid {
      height: 5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .nav-links {
      display: none;
    }
    .sub-nav {
      display: block;
    }
    li {
      a {
        font-weight: 300;
        padding: 0.5rem 1rem;
        text-transform: uppercase;
      }
    }
    .cart-container {
      display: none;
    }
    .cart-icon {
      font-size: 1.6rem;
    }

    .nav-link-item {
    }
    .cart-link {
      position: relative;
      transition: all 0.2s ease;
      border-radius: 1rem;
    }
    .cart-link.active {
      color: white;
    }
    .nav-link {
      margin: 0 0.5rem;
      border-radius: 1rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: #505ab1;
        color: white;
        border-radius: var(--border-radius);
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        /* transform: translateY(-4px); */
        /* border-bottom: 3px solid #444d9c; */
      }
    }
    .cart-amount-icon {
      position: absolute;
      border-radius: 50%;
      background-color: red;
      text-align: center;
      color: white;
      width: 1.5rem;
      height: 1.5rem;
      top: -6px;
      right: 2px;
    }
  }
  @media screen and (min-width: 768px) {
    .nav-container {
      img {
        width: 10rem;
      }
      .nav-links {
        display: flex;
        justify-content: center;
      }
      .sub-nav {
        display: none;
      }
      .cart-container {
        display: flex;
      }

      .nav-grid {
        display: grid;
        height: 5rem;
        width: 100%;
        display: grid;
        grid-template-columns: 10rem 1fr 10rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .nav-grid {
      height: 5rem;
      width: 100%;
      display: grid;
      grid-template-columns: 10rem 1fr 10rem;
    }
  }
`;

export default Navbar;
