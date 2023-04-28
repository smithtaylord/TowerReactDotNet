import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';

function componentName() {
    const { eventId } = useParams();

    async function getEvent() {
        try {
            await eventsService.getEvent(eventId)
        }
        catch (error) {
            Pop.error(error);
        }
    }

    useEffect(() => {
        getEvent()
    }, [eventId])

    return (
        <div className="event-page">
            <h1>Event Page</h1>
            <p>Event ID: {eventId}</p>
            {/* Add your event page content here */}
        </div>
    );

}
export default observer(componentName)