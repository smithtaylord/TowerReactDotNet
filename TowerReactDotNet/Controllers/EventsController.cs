namespace TowerReactDotNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly EventsService _eventsService;
        private readonly Auth0Provider _auth;

        public EventsController(EventsService eventsService, Auth0Provider auth)
        {
            _eventsService = eventsService;
            _auth = auth;
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
    }
}