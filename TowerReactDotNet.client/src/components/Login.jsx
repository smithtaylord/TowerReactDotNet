import { observer } from "mobx-react-lite"
import React from "react"
import { Link } from "react-router-dom"
import { AppState } from "../AppState.js"
import { AuthService } from "../services/AuthService.js"
import Tour from 'reactour';

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
      <button className="button w-100 mt-3 mb-5" onClick={login}>Login</button>
    </div>
  )
  // function showTour() {
  //   AppState.showTour = true
  // }

  const authenticated = (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <img src={AppState.account?.picture || AppState.user?.
          // @ts-ignore
          picture}
          alt="account photo"
          className="img-fluid mt-3 rounded mb-3 d-none d-lg-block text-center" />
      </div>
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
      {!AppState.account?.id && !AppState.showTour && (
        <div className="item button-parrot mt-5 text-center ">
          {/* <button onClick={showTour}>Tour
            <div className="parrot"></div>
            <div className="parrot"></div>
            <div className="parrot"></div>
            <div className="parrot"></div>
            <div className="parrot"></div>
            <div className="parrot"></div>
          </button> */}
        </div>
      )}
    </div>
  )
}

export default observer(Login)