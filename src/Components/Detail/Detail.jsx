import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetDataById } from "../../Helpers/GetData";
import { NavBar } from "../NavBar";

const Detail = () => {
  const params = useParams();
  const [characterById, setCharacterById] = useState(null);

  useEffect(() => {
    GetDataById(params.id, setCharacterById);
  }, [params.id]);
  return (
    <div className="container mx-auto mt-1">
      <NavBar />
      {characterById !== null ? (
        <div className="container fluid text-center">
          <h3 className="title">{characterById.name} </h3>
          <img
            className="w-50 p-3 img-fluid img-thumbnail rounded mx-auto d-block"
            src={`${characterById.thumbnail.path}.${characterById.thumbnail.extension}`}
            alt={characterById.name}
          />
          <p className="text-white mt-1">{characterById.description}</p>
          <h4 className="text-white ">
            Comics: {characterById.comics.available}
          </h4>
          <h4 className="text-white ">
            Series: {characterById.series.available}
          </h4>
          <h4 className="text-white ">
            Stories: {characterById.stories.available}
          </h4>
          <h4 className="text-white ">
            Events: {characterById.events.available}
          </h4>
        </div>
      ) : (
        <div className="d-flex align-items-center text-danger">
          <strong>Loading...</strong>
          <div
            className="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Detail;
