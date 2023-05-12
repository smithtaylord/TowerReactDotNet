import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand d-flex" to={''}>
        <div className="d-flex flex-column align-items-center">
          <img alt="logo" src={'Logo.svg'} height="45" />
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <span>Made with
        <img className="mx-2 logo"
          src="https://diegomariano.com/wp-content/uploads/2021/06/react-logo.png"
          alt="" /> &
        <img className="ms-4 rounded logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png"
          alt="" />
      </span>


      {/* <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto">
          <li> */}
      {/* <Link to={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              About
            </Link> */}
      {/* </li>
        </ul>
        <Login />
      </div > */}
    </nav >
  )
}