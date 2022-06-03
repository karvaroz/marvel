import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetData } from "../Helpers/GetData";
import { startLogout } from "../Redux/Actions/authActions";
import CharacterCard from "./CharacterCard";

const Home = () => {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    GetData(setCharacters);
  }, []);

  return (
    <div className="container">
      Home
      <button onClick={() => dispatch(startLogout())}>Cerrar</button>
      <div className="row">
        {characters !== null ? (
          characters?.map((character) => (
            <div className="col-md" key={character.id}>
              <CharacterCard character={character} key={character.id} />
            </div>
          ))
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
