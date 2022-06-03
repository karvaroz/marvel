import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const { id, name, description, thumbnail, comics, series, stories } =
    character;

  return (
    <div
      className="card"
      id={id}
      style={{ width: "18rem", height: "auto", marginTop: "10px" }}
    >
      <img
        className="card-img-top"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">
          {name} - {id}{" "}
        </h5>
        <p className="card-text">
          {description ? description : "Not description found"}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Comics: {comics.available}</li>
        <li className="list-group-item">Series: {series.available}</li>
        <li className="list-group-item">Stories: {stories.available}</li>
      </ul>
      <div className="card-body">
        <Link to={`/character/${id}/`}>More</Link>
      </div>
    </div>
  );
};

export default CharacterCard;
