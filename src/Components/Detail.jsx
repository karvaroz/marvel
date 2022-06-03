import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetDataById } from "../Helpers/GetData";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [characterById, setCharacterById] = useState(null);

  const handleReturn = () => {
    navigate(-1);
  };
  console.log(characterById);

  useEffect(() => {
    GetDataById(params.id, setCharacterById);
  }, [params.id]);
  return (
    <div>
      {characterById !== null ? (
        <div className="container">
          <button onClick={handleReturn}>Return</button>
          <h3>{characterById.name} </h3>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default Detail;
