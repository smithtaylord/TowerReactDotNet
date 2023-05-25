import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { AppState } from '../AppState.js';
import EventCard from '../components/EventCard.jsx';
import Banner from '../components/Banner.jsx';
import SortBar from '../components/SortBar.jsx';
import Loader from '../components/Loader.jsx'

function HomePage() {
  async function getAllEvents() {
    try {
      await eventsService.getAllEvents()
    }
    catch (error) {
      Pop.error(error);
    }
  }

  function clearActiveEvent() {
    AppState.activeEvent = {}
  }

  let filteredEvents = AppState.allEvents;
  if (AppState.activeFilter) {
    filteredEvents = filteredEvents.filter(f => f.type == AppState.activeFilter)
  }
  let event = (filteredEvents.map(e => {
    return (
      <div
        className='col-12 col-md-6 col-xl-3  py-4'
        key={e.id}>
        <EventCard event={e} />
      </div>
    )
  }))

  useEffect(() => {
    getAllEvents(), clearActiveEvent()
  }, [])

  return (
    <>
      <Banner />
      <SortBar />
      <div className="container-fluid">
        <div className="row">
          {AppState.allEvents.length <= 0 ? <Loader /> : event}
        </div>
      </div>
    </>
  )

}
export default observer(HomePage)