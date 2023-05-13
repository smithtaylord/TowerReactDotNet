namespace TowerReactDotNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly EventsService _eventsService;
        private readonly TicketsService _ticketsService;
        private readonly CommentsService _commentsService;
        private readonly Auth0Provider _auth;

        public EventsController(EventsService eventsService, Auth0Provider auth, TicketsService ticketsService, CommentsService commentsService)
        {
            _eventsService = eventsService;
            _auth = auth;
            _ticketsService = ticketsService;
            _commentsService = commentsService;
        }

        [HttpPost]
        [Authorize]

        async public Task<ActionResult<TowerEvent>> CreateEvent([FromBody] TowerEvent eventData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                eventData.CreatorId = userInfo.Id;
                TowerEvent newEvent = _eventsService.CreateEvent(eventData);
                newEvent.Creator = userInfo;
                return Ok(newEvent);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]

        public ActionResult<List<TowerEvent>> GetAllEvents()
        {
            try
            {
                List<TowerEvent> allEvents = _eventsService.GetAllEvents();
                return Ok(allEvents);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<List<TowerEvent>> GetOneEvent(int id)
        {
            try
            {
                TowerEvent oneEvent = _eventsService.GetOneEvent(id);
                return Ok(oneEvent);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/tickets")]
        public ActionResult<List<Ticket>> GetAttendees(int id)
        {
            try
            {
                List<Ticket> tickets = _ticketsService.GetAttendees(id);
                return Ok(tickets);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("{id}/comments")]
        public ActionResult<List<Comment>> GetComments(int id)
        {
            try
            {
                List<Comment> comments = _commentsService.GetComments(id);
                return Ok(comments);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        async public Task<ActionResult<string>> DeleteEvent(int id)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                TowerEvent towerEvent = _eventsService.DeleteEvent(id, userInfo.Id);
                return Ok(towerEvent);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}