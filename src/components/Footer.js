import rocketIcon from "../assets/images/rocket_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={rocketIcon} alt="Rocket Icon" className="footer__icon" />
      <p className="footer__text">Exciting space adventure!</p>
    </div>
  );
};

export default Footer;
