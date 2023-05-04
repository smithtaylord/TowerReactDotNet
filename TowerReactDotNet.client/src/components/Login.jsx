import { observer } from "mobx-react-lite"
import React from "react"
import { Link } from "react-router-dom"
import { AppState } from "../AppState.js"
import { AuthService } from "../services/AuthService.js"

function Login() {

  function login() {
    AuthService.loginWithRedirect()
  }

  function logout() {
    localStorage.removeItem('user-token')
    AuthService.logout({})
  }

  const notAuthenticated = (
    <button className="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0" onClick={login}>Login</button>
  )

  const authenticated = (
    <div className="my-2 my-lg-0 container-fluid">
      <img src={AppState.account?.picture || AppState.user?.
        // @ts-ignore
        picture} alt="account photo" height="" className="img-fluid mt-3 rounded selectable no-select mb-3" data-bs-toggle="dropdown"
        aria-expanded="false" />

      <div className="row">
        <div className="col-12">
          <Link to={'Account'}>
            <button className="button w-100 mb-3">
              Manage Account
            </button>
          </Link>
          <button className="button-red w-100 mb-3" onClick={logout}>
            <i className="mdi mdi-logout"></i>
            logout
          </button>
          <button
            type="button"
            className="button w-100 mb-3"
            data-bs-toggle="modal"
            data-bs-target="#createEventModal">
            Create Event
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <span className="navbar-text">
        {!AppState.account?.id ? notAuthenticated : authenticated}
      </span>
    </div>
  )
}

export default observer(Login)