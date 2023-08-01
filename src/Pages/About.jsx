import { styled } from "styled-components";
import img from "../assets/hero-image/img12.jpg";
import img2 from "../assets/hero-image/img5.jpg";
import img3 from "../assets/hero-image/img6.jpg";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  return (
    <Wrapper
      initial={{ filter: "blur(8px) " }}
      animate={{ filter: "blur(0) " }}
      exit={{
        filter: "blur(8px)",
        transition: { duration: 0.01 },
      }}
    >
      <div className="about-wrapper">
        <div className="about-img">
          <img src={img} alt="" />
          <h1>About Us</h1>
        </div>
        <div className="about-container">
          <div className="align-vertical justify-content">
            <img src={img2} alt="" />
          </div>
          <div className="about-text align-vertical  ">
            <div>
              <h2>COMMERCIAL & HOSPITALITY FURNITURE MANUFACTURERS</h2>
              <p>
                <br />
                Rooted in decades of <b>global partnerships</b> through our
                sister company UHS International, emerged the leading commercial
                and hospitality furniture manufacturer FREE TABLE.
                <br />
                <br />
                Starting out as a small collection of customisable tables and
                chairs, filling gaps of demands in the global market, FREE TABLE
                has since grown into a full range of design-led contract
                furniture. We maintain our growth through continued dedication
                to market research, innovation and, of course, working closely
                with you.
                <br />
                <br />
                Our team is made up of passionate British and European creative
                thinkers, confident in <b>mixing cultural</b> and multinational
                knowledge in crafting designs fit for purpose and spaces where
                people can find comfort away from home. Our design, our craft,
                our product is created with <b>authenticity</b> , comfort and
                overall quality enabling a fantastic range built for the
                contract environment. From the workspace to a hotel lounge, the
                university campus to a restaurant.
                <br />
                Your work, your life…
              </p>
            </div>
          </div>
          <div className="about-text align-vertical  ">
            <div>
              <h2>CRAFTING . WORK . LIFE</h2>
              <p>
                <br />“<b>Craftsmanship</b> is the quality that comes from
                creating with passion, care, and attention to detail” and this
                is reflected in the product ranges we develop at Table Place
                Chairs_ and is visible as soon as they enter your space. Through
                a solid supply chain and 100% of our manufacturing based in
                Europe, we ensure that every product is designed and produced to
                the highest of standards, making them suitable for any contract
                environment, without losing the soft edge that provides the
                comfort away from home.
                <br />
                <br />
                Starting out as a small collection of customisable tables and
                chairs, filling gaps of demands in the global market, FREE TABLE
                has since grown into a full range of design-led contract
                furniture. We maintain our growth through continued dedication
                to market research, innovation and, of course, working closely
                with you.
                <br />
                <br />
                We have a global presence which puts us right on the pulse of
                results of years of honing the finest, most specific
                craftsmanship and modern furniture design. We are also striving
                to become the easiest modern furniture designing & manufacturing
                company to order from and have the most interactive and dynamic
                website in the hospitality furnishing industry.
                <br />
              </p>
            </div>
          </div>
          <div className="align-vertical justify-content">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  height: auto;
  margin-top: -5rem;
  margin-bottom: 5rem;
  .about-img {
    position: relative;
    img {
      width: 100vw;
      height: 22rem;
      object-fit: cover;
    }
    h1 {
      position: absolute;
      color: white;
      font-size: 1.5rem;
      text-align: center;
      padding: 1rem 2rem;
      top: 14rem;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 400;
      border-radius: 1rem;
      text-transform: uppercase;
    }
  }
  .about-container {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem 1rem;
    img {
      width: 90vw;
      height: auto;
      object-fit: contain;
    }
  }
  p {
    font-size: 0.85rem;
  }
  .about-text {
    padding: 2rem 1rem 0;
  }

  @media screen and (min-width: 1440px) {
    .about-img {
      position: relative;
      img {
        width: 100%;
        height: 22rem;
        object-fit: cover;
      }
      h1 {
        position: absolute;
        font-size: 2rem;
        top: 12rem;
        width: auto;

        border: 1px solid #cccccc;
      }
    }
    .about-container {
      grid-template-columns: 50% 50%;
      padding: 5rem 10rem;
      gap: 0rem;
      img {
        width: 100%;
        height: 50rem;
        object-fit: cover;
      }
    }
    .about-text {
      padding: 0 3rem;
    }
  }
`;

export default About;
