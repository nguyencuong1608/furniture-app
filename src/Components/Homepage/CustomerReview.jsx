import { styled } from "styled-components";

const customers = [
  {
    img: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg",
    name: "John Snow",
    text: "I am very happy with my furniture. Communication was great and delivery was on time, they even called me half an hour before so I was ready for them! I will use this company again.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg/640px-Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg",
    name: "Jaime Lannister",
    text: "Chairs and bench arrived well packaged and we're delivered at the time promised into the room we needed them to.be. lovely furniture",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/sophie-turner-attends-an-evening-honoring-louis-vuitton-and-news-photo-1623163977.jpg?crop=0.373xw:0.560xh;0.259xw,0.0318xh&resize=1200:*",
    name: "Sansha Stark",
    text: "Very well made bedroom furniture,  which arrived on time and was extremely well packaged.",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMTM1MTI5Mzc0MF5BMl5BanBnXkFtZTYwNzgzOTQz._V1_FMjpg_UX1000_.jpg",
    name: "Tyrion Lannister",
    text: "The stools are lovely.  Sturdy and very classy looking.  The seats are very comfortable with plenty of room for the larger person.  They look more expensive than they were.  Thanks.",
  },
];

const CustomerReview = () => {
  return (
    <Wrapper>
      <div className="section section-center">
        <hr />
        <h3>CUSTOMER REVIEWS</h3>
        <p>
          All customer reviews and feedback are valuable contributions to us.
        </p>
        <div className="customer-container">
          {customers.map((item, index) => {
            return (
              <div className="customer-content" key={`key${index}`}>
                <img src={item.img} alt={item.name} />
                <b>{item.name}</b>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 5rem;
  h3 {
    padding-top: 5rem;
    text-align: center;
  }
  p {
    text-align: center;
    padding-bottom: 2rem;
    padding: 0 5rem;
  }
  .customer-container {
    display: block;
  }
  .customer-content {
    padding: 2rem 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    }
    b {
      margin-top: 1rem;
    }
    p {
      padding-top: 0.5rem;
    }
  }
  @media screen and (min-width: 768px) {
    .customer-container {
      display: grid;
      grid-template-columns: 50% 50%;
    }
    p {
      padding: 0;
    }
  }
  @media screen and (min-width: 992px) {
    .customer-container {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
  }
`;

export default CustomerReview;
