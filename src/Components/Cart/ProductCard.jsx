import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { formatPrice } from "../../utils/helper";

const ProductCard = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <Link to={`/products/${id}`}>
        <div className="img-wrap">
          <img src={image} alt="" />
        </div>
        <div className="info-wrap">
          <h5>{name}</h5>
          <p>{formatPrice(price)}</p>
        </div>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.25rem;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 25px;
    scale: 1.05;
  }
  .img-wrap {
    overflow: hidden;
    width: 100%;
    height: 16rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
    }
  }
  .info-wrap {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 1rem;
    h5 {
      color: black;
      font-weight: 400;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
`;
export default ProductCard;
