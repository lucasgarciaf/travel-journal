import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      <h1 className="title--navbar">my travel journal.</h1>
    </nav>
  );
}
