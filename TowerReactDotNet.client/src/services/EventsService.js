import { AppState } from "../AppState.js"
import { TowerEvent } from "../models/TowerEvent.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EventsService {

    async getAllEvents() {
        const res = await api.get('/api/events')
        // logger.log('[All Events]', res.data)
        AppState.allEvents = res.data.map(e => new TowerEvent(e))
        // logger.log(AppState.allEvents)
    }

    async getEvent(eventId) {
        const res = await api.get('/api/events/' + eventId)
        // logger.log("[One Event]", res.data)
        AppState.activeEvent = new TowerEvent(res.data)
    }

    async createEvent(formData) {
        const res = await api.post('/api/events', formData)
        // logger.log('[create event]', res.data)
        AppState.activeEvent = new TowerEvent(res.data)
    }

    async cancelEvent(eventId) {
        const res = await api.delete('/api/events/' + eventId)
        // logger.log('[canceled event]', res.data)
        AppState.activeEvent = new TowerEvent(res.data)
    }

}

export const eventsService = new EventsService()