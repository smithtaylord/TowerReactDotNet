import { observer } from 'mobx-react-lite';
import React from 'react';
import { useParams } from 'react-router-dom';

function componentName() {
    const { eventId } = useParams();

    return (
        <div className="event-page">
            <h1>Event Page</h1>
            <p>Event ID: {eventId}</p>
            {/* Add your event page content here */}
        </div>
    );

}
export default observer(componentName)