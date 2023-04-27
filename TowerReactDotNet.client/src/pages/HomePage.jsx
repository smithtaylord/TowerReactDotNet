import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { AppState } from '../AppState.js';
import EventCard from '../components/EventCard.jsx';
import Banner from '../components/Banner.jsx';

function HomePage() {
async function getAllEvents(){
  try {
    await eventsService.getAllEvents()
  }
  catch (error){
    Pop.error(error);
  }
}

let event = (AppState.allEvents.map(e =>{
  return (
    <div
    className='col-3 p-4' 
    key={e.id}>
      <EventCard event={e} />
    </div>
  )
}))

useEffect(() => {
  getAllEvents()
},[])

  return (
<>
    <Banner />
    <div className="container-fluid">
      <div className="row">
          {event}
      </div>
    </div>
</>
  )

}
export default observer(HomePage)