import axios from "axios";

const API_URL =
  "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=77ee2832d2e68984a016670473e3876b&hash=2bdca5c11854f6443fb85eccf2ffbf66&limit=100";

const GetData = async (state) => {
  const request = await axios.get(API_URL);

  state(request.data.data.results);
};

const GetDataById = async (id, state) => {
  const request = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=77ee2832d2e68984a016670473e3876b&hash=2bdca5c11854f6443fb85eccf2ffbf66`
  );

  state(request.data.data.results[0]);
};

export { GetData, GetDataById };
