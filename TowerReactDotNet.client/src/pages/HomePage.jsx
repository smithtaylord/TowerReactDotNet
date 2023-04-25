import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { AppState } from '../AppState.js';

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
    <div key={e.id}>
      {e.name}
    </div>
  )
}))

useEffect(() => {
  getAllEvents()
},[])

  return (

    <div className="componentName">
{event}
    </div>
  )

}
export default observer(HomePage)