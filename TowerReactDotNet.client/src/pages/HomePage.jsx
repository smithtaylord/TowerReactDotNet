import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';

function componentName() {
async function getAllEvents(){
  try {
    await eventsService.getAllEvents()
  }
  catch (error){
    Pop.error(error);
  }
}

useEffect(() => {
  getAllEvents()
},[])

  return (

    <div className="componentName">

    </div>
  )

}
export default observer(componentName)