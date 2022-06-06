import React from "react";
import { startLogout } from "../Redux/Actions/authActions";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <h6 className="nav-link active">Home</h6>
      </li>
      <li className="nav-item">
        <button
          className="btn-danger"
          onClick={() => dispatch(startLogout())}
        >
          Logout
        </button>
      </li>
    </ul>
  );
};
