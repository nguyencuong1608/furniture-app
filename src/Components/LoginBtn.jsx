import { styled } from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useLocation } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();

  return (
    <Wrapper>
      <button
        onClick={() => loginWithRedirect()}
        style={
          location.pathname === "/cart"
            ? {
                color: "white",
                backgroundColor: "var(--clr-primary)",
              }
            : null
        }
      >
        Log In
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  button {
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: var(--clr-primary);
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
  }
`;
export default LoginButton;
