import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/destination.css";
import image from "../assets/images/destination.png";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Mainpage = ({ p }) => {
  const { name, description } = p;
  const line = Array(name.length + 5).join("-");
  return (
    <Link to={`/details/${p.id}`} className="destination-link">
      <div className="destination">
        <img src={image} alt="avatar" className="destination-img" />
        <h5 className="destination-name">{name}</h5>
        <p className="destination-line">{line}</p>
        <p className="destination-description">{description}</p>
        <p className="destination-socials">
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaWhatsapp />
          </span>
        </p>
      </div>
    </Link>
  );
};

Mainpage.propTypes = {
  p: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mainpage;
