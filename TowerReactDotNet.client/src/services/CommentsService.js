import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService{
    async getComments(eventId){
        const res = await api.get(`api/events/${eventId}/comments`)
        logger.log('[event comments]', res.data)
        AppState.comments = res.data
    }

    async postComment(formData){
        const res = await api.post('api/comments', formData)
        logger.log('[posting comment]', res.data)
        res.data.creator.name = AppState.account?.name
        res.data.creator.picture = AppState.account?.picture
        const updatedComments = [...AppState.comments, res.data]
        AppState.comments = updatedComments
    }
}

export const commentsService = new CommentsService()