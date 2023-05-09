import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pop from '../utils/Pop.js';
import { eventsService } from '../services/EventsService.js';
import { AppState } from '../AppState.js';
import EventDetails from '../components/EventDetails.jsx';
import Attendees from '../components/Attendees.jsx';
import Comments from '../components/Comments.jsx';
import { ticketsService } from '../services/TicketsService.js';

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
    async function getAttendees() {
        try {
            await ticketsService.getAttendees(eventId)
        }
        catch (error) {
            Pop.error(error);
        }
    }

    useEffect(() => {
        getEvent(), getAttendees()
    }, [eventId])

    return (
        <>
            <EventDetails event={event} />
            <Attendees />
            <Comments />
        </>
    );

}
export default observer(componentName)