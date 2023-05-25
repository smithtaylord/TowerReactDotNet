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
    <div className="px-3">
      <button className="button w-100 mt-3" onClick={login}>Login</button>
    </div>
  )

  const authenticated = (
    <div className="my-2 my-lg-0 container-fluid">
      <img src={AppState.account?.picture || AppState.user?.
        // @ts-ignore
        picture} alt="account photo" className="img-fluid prof-pic  mt-3 rounded no-select mb-3" data-bs-toggle="dropdown"
        aria-expanded="false" />

      <div className="row">
        <div className="col-12">
          <Link to={'Account'}>
            <button className="button w-100 mb-3">
              My Tickets
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
          <button
            type="button"
            className="button w-100 mb-3"
            data-bs-toggle="modal"
            data-bs-target="#editAccountModal">
            Edit Account
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