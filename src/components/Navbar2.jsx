import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { withRouter } from "react-router-dom";

const Navbar2 = (props) => {
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/login");
    });
  };

  return (
    <div className="sticky-top container-fluid navbar navbar-dark bg-warning">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand text-dark" to="/">
          Camino a Casa
        </Link>
        <div className="d-flex">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mr-3">
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar2);
