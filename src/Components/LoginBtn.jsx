import { styled } from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <button onClick={() => loginWithRedirect()}>Log In</button>
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
