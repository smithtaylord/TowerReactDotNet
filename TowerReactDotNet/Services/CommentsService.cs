namespace TowerReactDotNet.Services
{
    public class CommentsService
    {
        CommentsRepository _repo;

        public CommentsService(CommentsRepository repo)
        {
            _repo = repo;
        }
    }
}