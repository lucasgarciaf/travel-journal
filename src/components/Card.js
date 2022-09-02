import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

export default function Cards(props) {
  return (
    <div className="card--line">
      <div>
        <img
          src={`./images/${props.coverImg}`}
          alt="card"
          className="card--image"
        />
      </div>
      <div>
        <p>
          {" "}
          <span className="fa-solid fa-user">
            <FontAwesomeIcon icon={faLocation} size="xl"></FontAwesomeIcon>
          </span>
          {props.country}{" "}
          <a href={props.gmapslink} className="gmaps--link">
            View on Google Maps
          </a>
        </p>
        <h1 className="card--title">{props.title}</h1>
        <h3 className="trip--date">{props.date}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
