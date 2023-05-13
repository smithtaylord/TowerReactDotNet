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
    }
}