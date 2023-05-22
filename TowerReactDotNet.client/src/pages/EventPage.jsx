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
import { commentsService } from '../services/CommentsService.js';
import Loader from '../components/Loader.jsx';

function componentName() {
    const { eventId } = useParams();
    const event = AppState.activeEvent
    const attendees = AppState.attendees
    const comments = AppState.comments
    const account = AppState.account
    const foundTicket = AppState.attendees.find(a => a.account.id == AppState.account?.id)

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
    async function getComments() {
        try {
            await commentsService.getComments(eventId)
        }
        catch (error) {
            Pop.error(error);
        }
    }

    useEffect(() => {
        getEvent(), getAttendees(), getComments()
    }, [eventId])

    return (
        <>
            {AppState.activeEvent ? <EventDetails event={event} foundTicket={foundTicket} /> : <Loader />}
            <Attendees attendees={attendees} />
            <Comments comments={comments} account={account} />
        </>
    );

}
export default observer(componentName)