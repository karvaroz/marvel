import React, { useEffect, useState } from "react";

import { GetData } from "../../Helpers/GetData";

import CharacterCard from "../CharacterCard/CharacterCard";

import "./Home.css";
import { NavBar } from "../NavBar";

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    GetData(setCharacters);
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <NavBar />
      <div className="row">
        {characters !== null ? (
          characters?.map((character) => (
            <div className="col-md-4" key={character.id}>
              <CharacterCard character={character} key={character.id} />
            </div>
          ))
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
    </div>
  );
};

export default Home;
