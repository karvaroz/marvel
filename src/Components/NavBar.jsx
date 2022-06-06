import React from "react";
import { startLogout } from "../Redux/Actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate(-1)

  }
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <h6 className="nav-link active" onClick={handleHomeClick}>Home</h6>
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
