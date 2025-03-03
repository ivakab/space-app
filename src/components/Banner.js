import earth from "../assets/images/EARTH.webp";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">
          Discover the vast expanses of{" "}
          <span className="banner__title__highlight">space</span>
        </h1>
        <p className="banner__description">
          Where the possibilities are{" "}
          <span className="banner__description__highlight">endless!</span>
        </p>
        <a href="" className="banner__btn">
          Learn more
        </a>
      </div>
      <div className="banner__rocket">
        <img src={earth} alt="Rocket" />
      </div>
    </div>
  );
};

export default Banner;
