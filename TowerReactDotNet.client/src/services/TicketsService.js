import { AppState } from "../AppState.js"
import { TowerEvent } from "../models/TowerEvent.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TicketsService{

async createTicket(eventId){
    const res = await api.post('api/tickets', {eventId})
    logger.log('[create ticket]', res.data)
    AppState.activeEvent = new TowerEvent(res.data.event)
}

}

export const ticketsService = new TicketsService()