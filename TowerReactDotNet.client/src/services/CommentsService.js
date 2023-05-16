import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService{
    async getComments(eventId){
        const res = await api.get(`api/events/${eventId}/comments`)
        logger.log('[event comments]', res.data)
        AppState.comments = res.data
    }
}

export const commentsService = new CommentsService()