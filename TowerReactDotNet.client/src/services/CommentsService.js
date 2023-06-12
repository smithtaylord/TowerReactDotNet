import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService {
    async getComments(eventId) {
        const res = await api.get(`api/events/${eventId}/comments`)
        // logger.log('[event comments]', res.data)
        AppState.comments = res.data
    }

    async postComment(formData) {
        const res = await api.post('api/comments', formData)
        // logger.log('[posting comment]', res.data)
        res.data.creator.name = AppState.account?.name
        res.data.creator.picture = AppState.account?.picture
        const updatedComments = [...AppState.comments, res.data]
        AppState.comments = updatedComments
    }

    async deleteComment(commentId) {
        const res = await api.delete('api/comments/' + commentId)
        // logger.log(res.data)
        const commentIndex = AppState.comments.findIndex(c => c.id == commentId)
        if (commentIndex != -1) {
            const updatedComments = [
                ...AppState.comments.slice(0, commentIndex),
                ...AppState.comments.slice(commentIndex + 1)
            ]
            AppState.comments = updatedComments
        }
    }
}

export const commentsService = new CommentsService()