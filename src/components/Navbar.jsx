import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/login");
    });
  };

  return (
    <div className="sticky-top container-fluid navbar navbar-dark bg-warning">
      <Link className="navbar-brand text-dark" to="/">
        Camino a Casa
      </Link>
      <div>
        <div className="d-flex">
          <NavLink className="btn btn-dark mr-3" to="/fundaciones">
            Fundaciones
          </NavLink>

          <NavLink className="btn btn-dark mr-3" to="/veterinarias">
            Veterinarias
          </NavLink>

          <NavLink className="btn btn-dark mr-3" to="/wikipet">
            WikiPet
          </NavLink>

          {props.firebaseUser !== null ? (
            <NavLink className="btn btn-dark mr-3" to="/adopcion">
              Adopción
            </NavLink>
          ) : null}

          {props.firebaseUser !== null ? (
            <button
              className="btn bg-primary text-white"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          ) : (
            <NavLink className="btn bg-primary text-white mr-3" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
