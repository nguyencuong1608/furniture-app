import { styled } from "styled-components";
import img from "../assets/hero-image/img7.jpg";
import img2 from "../assets/logo-300x89.png";
import img3 from "../assets/hero-image/img8.jpg";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../Components";

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div
        style={{ width: "auto", height: "90vh" }}
        className="align-items justify-content"
      >
        <h2 style={{ alignSelf: "center" }}>Loading ...</h2>
      </div>
    );
  }
  return (
    <Wrapper>
      <div className="user-container">
        <div className="sub-img">
          <img src={img} alt="" />
        </div>
        <div className="user-content">
          <div className="img-wrapper">
            <img src={img2} alt="" />
          </div>
          <h4>Welcome to furniture station</h4>
          {isAuthenticated && (
            <div className="user-info">
              <img src={user?.picture} alt={user.name} className="user-img" />
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh);
  margin-top: -5rem;
  display: flex;
  background-image: url(${img3});
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  .user-container {
    margin: auto;
    width: 95vw;
    max-width: 70rem;
    height: 40rem;
    background-color: #ffffffc1;
    border-radius: var(--border-radius);
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  .sub-img {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-content {
    margin-top: 4rem;
  }
  .img-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
    img {
      width: 30%;
      object-fit: cover;
      margin: auto;
    }
  }
  h2 {
    margin-top: 1rem;
  }

  h4 {
    text-transform: capitalize;
    font-weight: 400;
    text-align: center;
    margin-bottom: 4rem;
    opacity: 0.6;
  }

  .user-info {
    text-align: center;
  }
  .user-img {
    width: 8rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  @media screen and (min-width: 1024px) {
    .user-container {
      grid-template-columns: 1fr 1fr;
      width: 80vw;
      max-width: 70rem;
    }
    .sub-img {
      display: block;
    }
  }
`;

export default User;
