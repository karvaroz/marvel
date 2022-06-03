import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../Redux/Actions/authActions';

const Home = () => {
    const dispatch = useDispatch();
  return (
    <div>
      Home
      <button onClick={() => dispatch(startLogout())}>
        Cerrar
      </button>
    </div>
  );
}

export default Home