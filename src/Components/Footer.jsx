import { styled } from "styled-components";
import logo2 from "../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container section ">
        <div className="footer-content section-center">
          <div className="footer-logo ">
            <img src={logo2} alt="" />
            <strong>Fast Delivery</strong>
            <strong>24/7 support</strong>
          </div>
          <div className="footer-address">
            <h4>find us</h4>
            <h6>THE BANKING HALL</h6>
            <h6>3 Cau Giay</h6>
            <h6>256 Xuan Thuy</h6>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <h6>T: 02456784802</h6>
            <h6>Email: furniturestation@gmail.COM</h6>
          </div>
          <div className="footer-social">
            {/* Follow us */}
            <h4>Follow us</h4>
            <div className="icon-list">
              <a href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="facebook-icon"
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    padding: "0.25rem",
                  }}
                />
              </a>
              <a href="https://www.tiktok.com/vi-VN/" target="_blank">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="tiktok-icon"
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    padding: "0.25rem",
                  }}
                />
              </a>

              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="twitter-icon"
                  style={{
                    color: "white",
                    fontSize: "1.5em",
                    padding: "0.25rem",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  .footer-container {
    background-color: var(--clr-grey-dark);
    padding: 4rem 0;

    .footer-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem 0;
      text-align: center;
    }

    .footer-logo {
      display: flex;
      flex-direction: column;
      img {
        width: 10rem;
        padding-bottom: 2rem;
      }
      strong {
        color: var(--clr-white);
        font-size: 1rem;
        font-weight: 400;
        padding-bottom: 0.5rem;
      }
    }

    h4 {
      color: var(--clr-white);
      font-weight: 400;
      text-transform: uppercase;
    }
    h6 {
      color: var(--clr-white);
      font-weight: 400;
      text-transform: uppercase;
      padding-bottom: 0.5rem;
    }
    .icon-list {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a {
      color: var(--clr-white);
      margin-right: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    .footer-container {
      .footer-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        text-align: left;
      }
      .icon-list {
        justify-content: flex-start;
      }
    }
  }
`;
export default Footer;
