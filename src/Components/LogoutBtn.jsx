import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Wrapper>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: black;
    font-size: 1rem;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: white;
      background-color: var(--clr-red);
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
  }
`;

export default LogoutButton;
