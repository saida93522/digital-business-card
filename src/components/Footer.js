import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="card-footer">
      <div className="footer-icon ">
        <a href="/twitter">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            size="lg"
            className="fa-brands"
          />
        </a>
        <a href="/facebook">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="lg"
            className="fa-brands"
          />
        </a>
        <a href="/instagram">
          <FontAwesomeIcon
            icon={faInstagramSquare}
            size="lg"
            className="fa-brands"
          />
        </a>
        <a href="/github">
          <FontAwesomeIcon icon={faLinkedin} size="lg" className="fa-brands" />
        </a>
        <a href="/github">
          <FontAwesomeIcon
            icon={faGithubSquare}
            size="lg"
            className="fa-brands"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
