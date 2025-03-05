import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navegacion = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div>
      {/* Navbar de Bootstrap con logo y nombre */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            {/* Imagen del logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"
              alt="Real Madrid Logo"
              width="23"
              height="30"
              className="d-inline-block align-text-top"
            />
            {/* Texto con margen a la izquierda */}
            <span className="ms-2">Real Madrid</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/listaUsuarios">
                      Lista de Socios
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={logout}>
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Iniciar Sesión
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/CrearUsuario">
                      Crear Socio
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navegacion;