import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { AppState } from '../AppState.js';
import EventDetails from '../components/EventDetails.jsx';

function componentName() {
    const { eventId } = useParams();
    const event = AppState.activeEvent

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
        <>
            <EventDetails event={event} />
        </>
    );

}
export default observer(componentName)