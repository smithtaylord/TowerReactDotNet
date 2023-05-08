import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TicketsService{

async createTicket(eventId){
    const res = await api.post('api/tickets', {eventId})
    logger.log('[create ticket]', res.data)
}

}

export const ticketsService = new TicketsService()