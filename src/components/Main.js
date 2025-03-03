import offerBg1 from "../assets/images/offerBg1.webp";
import offerBg2 from "../assets/images/offerBg2.webp";
import offerBg3 from "../assets/images/offerBg3.webp";
import offerBg4 from "../assets/images/offerBg4.webp";

const Main = () => {
  return (
    <div className="offers">
      <h2 className="offers__title">Offers</h2>
      <div className="offers__grid">
        <div
          className="offers__card offers__card--full-width"
          style={{ backgroundImage: `url(${offerBg1})` }}
        >
          <h3 className="offers__card-title">Move the borders of reality!</h3>
          <p className="offers__card-description">
            Go on a space adventure – it’s possible with us!
          </p>
          <a href="#" className="offers__card-btn">
            Learn more
          </a>
        </div>

        <div
          className="offers__card"
          style={{ backgroundImage: `url(${offerBg2})` }}
        >
          <h3 className="offers__card-title">
            Space is not just stars and planets
          </h3>
          <p className="offers__card-description">Go on a space adventure</p>
          <a href="#" className="offers__card-btn">
            Learn more
          </a>
        </div>

        <div
          className="offers__card"
          style={{ backgroundImage: `url(${offerBg3})` }}
        >
          <h3 className="offers__card-title">For those who dream of stars</h3>
          <p className="offers__card-description">
            Our offer: make your dream come true
          </p>
          <a href="#" className="offers__card-btn">
            Learn more
          </a>
        </div>

        <div
          className="offers__card offers__card--full-width"
          style={{ backgroundImage: `url(${offerBg4})` }}
        >
          <h3 className="offers__card-title">Fulfill your fantastic dreams</h3>
          <p className="offers__card-description">
            Space has never been so close
          </p>
          <a href="#" className="offers__card-btn">
            Learn more
          </a>
        </div>
      </div>

      <div className="offers__description-section">
        <h3 className="offers__description-title">Embark on a space journey</h3>
        <p className="offers__description-text">
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <a href="#" className="offers__description-btn">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Main;
