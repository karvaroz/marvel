import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const { id, name, thumbnail } = character;

  return (
    <div className="card" id={id} style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title text-muted">
          {name} - {id}{" "}
        </h5>
      </div>
      <div className="btn">
        <Link to={`/character/${id}/`}>More</Link>
      </div>
    </div>
  );
};

export default CharacterCard;
