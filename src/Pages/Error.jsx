import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Error = ({ errorMsg }) => {
  return (
    <Wrapper>
      {errorMsg ? (
        <h1>{errorMsg}</h1>
      ) : (
        <h1>the specified path does not exist</h1>
      )}

      <Link to="/">Go Back</Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  a {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--clr-primary);
    color: white;
    border-radius: 8px;
    opacity: 0.6;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
`;
export default Error;
