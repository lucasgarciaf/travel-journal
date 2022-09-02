import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faGlobeAmericas} size="xl"></FontAwesomeIcon>
      <h1 className="title--navbar">My travel journal.</h1>
    </nav>
  );
}
