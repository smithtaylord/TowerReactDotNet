import { observer } from "mobx-react";
import React from "react";
import { AppState } from "../AppState.js";
import Loader from '../components/Loader.jsx'

function AccountPage() {

  let tickets = AppState.myTickets.map(t => {
    return (
      <div key={t.id} className="container-fluid">
        <div className="row">
          <div className="col-3 ">
            <img
              src={t.event.coverImg}
              alt={t.event.name}
              className="ticket-pic img-fluid" />
          </div>
          <div className="col-9"></div>
        </div>
      </div>
    )
  })

  return (
    <div className="account-page">
      <h1 className="text-center text-info border-bottom py-4 bg-dark bg-gradient">Welcome, {AppState.account?.name}</h1>
      <h3 className="p-3">Tickets</h3>
      {AppState.myTickets.length == 0 ? <Loader /> : tickets}
    </div>
  )
}

export default observer(AccountPage)