import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { AppState } from "../AppState.js";
import Loader from '../components/Loader.jsx'
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { ticketsService } from "../services/TicketsService.js";
import { Link } from 'react-router-dom';

function AccountPage() {
  let lastChar = AppState.account?.name.charAt(AppState.account?.name.length - 1)
  let possive;
  if (lastChar.toLowerCase() == 's') {
    possive = AppState.account?.name + "'"
  } else {
    possive = AppState.account?.name + "'s"
  }
  function clearActiveEvent() {
    AppState.activeEvent = {}
  }

  async function handleClick(ticketId, eventId) {
    try {
      if (await Pop.confirm('Are you sure you want to return your ticket?'))
        await ticketsService.returnTicket(ticketId, eventId)
    }
    catch (error) {
      Pop.error(error);
    }
  }

  let tickets = AppState.myTickets.map(t => {
    return (
      <div key={t.id} className="container mb-5 tower-box-shadow rounded bg-gradient">
        <div className="row">
          <div className="col-3 p-0 ">
            <Link to={`/event/${t.event.id}`}>
              <img
                src={t.event.coverImg}
                alt={t.event.name}
                className="ticket-pic img-fluid rounded-start" />
            </Link>
          </div>
          <div className="col-9">
            <div className="d-flex flex-column">
              <div className="p-4">
                <div className="text-white fs-4 fw-bold">{t.event.name}</div>
                <div className="text-info fs-6">{t.event.location}</div>
                <div className="text-info fs-6">{t.event.startDate}</div>
              </div>
              <div className="text-end px-4">
                <button onClick={() => handleClick(t.id, t.event.id)}
                  className="btn bg-danger tower-box-shadow selectable">
                  Not Going
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  useEffect(() => {
    clearActiveEvent()
  }, [])

  return (
    <div className="account-page">
      <h1 className="text-center text-info border-bottom py-4 bg-dark bg-gradient">{possive} Tickets</h1>
      <div className="p-5 m-5">
        {AppState.myTickets.length == 0 ? <Loader /> : tickets}
      </div>
    </div>
  )
}

export default observer(AccountPage)