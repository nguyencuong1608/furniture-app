import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { styled } from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="big-sk">
        <Skeleton height={576} />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        {" "}
        <Skeleton width={100} /> <Skeleton width={500} height={60} />{" "}
        <div style={{ paddingTop: "2rem" }}>
          <Skeleton width={600} /> <Skeleton width={600} />{" "}
          <Skeleton width={600} />
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <Skeleton width={150} /> <Skeleton width={150} />{" "}
          <Skeleton width={150} />
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <Skeleton width={266} height={46} />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5rem 12rem 12rem;
  gap: 2.5rem;
  .big-sk {
    padding-left: 10rem;
  }
`;

export default Loading;
