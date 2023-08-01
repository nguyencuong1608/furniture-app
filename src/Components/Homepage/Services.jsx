import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Services = () => {
  const { featured_products, isLoading } = useSelector(
    (state) => state.allProducts
  );
  return (
    <Wrapper>
      <div className="section-center">
        <hr />
        <div className="services-container">
          <h3>FURNITURE SOLUTIONS FOR EVERY PUBLIC SPACE</h3>
          <p>
            We’re hospitable people at Table Place Chairs. We have friends and
            family located all round the world, and we love nothing better than
            to meet up for good food with good company. So we concentrated on
            providing furniture solutions to the hospitality industry for over a
            decade: it felt like home.
          </p>
          <p>
            But the workplace rules are changing; the lines have become blurred.
            So now, we are delighted to offer our hospitable solutions in any
            space, anywhere. And those solutions are not confined to tables and
            chairs. But that is where our journey started, so perhaps yours
            should too.
          </p>
        </div>
        {isLoading || (
          <div className="featured-products">
            {featured_products.slice(3, 6).map((item) => {
              return (
                <div className="featured-product" key={`key:${item.id}`}>
                  <Link to="./products">
                    <img src={item.image} alt={item.description} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .services-container {
    padding: 4rem 0;

    h3 {
      text-align: center;
      padding-bottom: 2rem;
    }
    p {
      text-align: center;
    }
  }
  .featured-products {
    display: grid;
    gap: 2rem;
    text-align: center;
  }

  img {
    height: 30rem;
    width: 80vw;
    object-fit: cover;
    border-radius: 0.25rem;
  }
  @media screen and (min-width: 1200px) {
    .services-container {
      padding: 4rem 10rem 2rem;
    }
    img {
      height: 24rem;
      width: 22rem;
      object-fit: cover;
      border-radius: 0.25rem;
    }
    .featured-products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      text-align: center;
      gap: 2rem;
    }
  }

  @media screen and (min-width: 1680px) {
    .featured-products {
      gap: 0;
    }
    img {
      height: 30rem;
      width: 30rem;
      object-fit: cover;
      border-radius: 0.25rem;
    }
  }
`;

export default Services;
