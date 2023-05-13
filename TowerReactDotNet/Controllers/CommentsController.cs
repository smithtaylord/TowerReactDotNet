namespace TowerReactDotNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentsController : ControllerBase
    {
        private readonly CommentsService _commentsService;
        private readonly Auth0Provider _auth;

        public CommentsController(CommentsService commentsService, Auth0Provider auth = null)
        {
            _commentsService = commentsService;
            _auth = auth;
        }
    }
}