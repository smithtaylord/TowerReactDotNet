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

        [HttpPost]
        [Authorize]
        async public Task<ActionResult<Comment>> CreateComment([FromBody] Comment commentData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                commentData.CreatorId = userInfo.Id;
                Comment newComment = _commentsService.CreateComment(commentData);
                newComment.Creator = userInfo;
                return Ok(newComment);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        async public Task<ActionResult<string>> DeleteComment(int id)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                string message = _commentsService.DeleteComment(id, userInfo.Id);
                return Ok(message);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}