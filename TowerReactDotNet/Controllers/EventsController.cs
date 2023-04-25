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
    }
}