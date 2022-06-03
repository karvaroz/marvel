
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import { google } from "../../Firebase/FirebaseConfig";
import { types } from "../Types/Types";

// Async Login with email and password
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        Swal.fire(
          "Inicio Sesión!",
          user.displayName,
          "success"
        );
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

// Login with google
export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        Swal.fire(
          "Inicio Sesión!",
          user.displayName,
          "success"
        );
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };
};


// Sign up with email and password
export const startSignUpEmailPassword = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, name)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(signUp(user.uid, user.displayName, user.email, user.password));
        Swal.fire("Bien Hecho!", "Registro exitoso", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };
};

export const signUp = (uid, displayName, email, password) => ({
  type: types.signup,
  payload: {
    uid,
    displayName,
    email,
    password,
  },
});

// Logout
export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    const userToDelete = auth.currentUser;
    deleteUser(userToDelete)
      .then(() => {
        console.log("User deleted");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
    signOut(auth)
      .then(() => {
        Swal.fire("Bien Hecho!", "Adios", "success");
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };
};

export const logout = () => ({
  type: types.logout,
});
