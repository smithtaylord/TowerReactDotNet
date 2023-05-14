namespace TowerReactDotNet.Services
{
    public class CommentsService
    {
        CommentsRepository _repo;

        public CommentsService(CommentsRepository repo)
        {
            _repo = repo;
        }

        internal Comment CreateComment(Comment commentData)
        {
            Comment newComment = _repo.CreateComment(commentData);
            return newComment;
        }


        internal List<Comment> GetComments(int id)
        {
            List<Comment> comments = _repo.GetComments(id);
            return comments;
        }
        internal string DeleteComment(int id, string userId)
        {
            Comment comment = _repo.GetOne(id);
            if (comment == null) throw new Exception($"No comment with id: {id}");
            if (comment.CreatorId != userId) throw new Exception("This is not your comment, you cannot delete");
            _repo.DeleteComment(id);
            return "Your comment has been deleted";


        }
    }
}