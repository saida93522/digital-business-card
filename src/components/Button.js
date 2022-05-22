import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Button = () => {
  return (
    <div className=" social-btn flex flex-row justify-center mt-2">
      <button className="email-btn w-80">
        <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
        Email
      </button>
    </div>
  );
};

export default Button;
