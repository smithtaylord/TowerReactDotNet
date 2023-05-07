namespace TowerReactDotNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly TicketsService _ticketsService;
        private readonly Auth0Provider _auth;

        public TicketsController(TicketsService ticketsService, Auth0Provider auth)
        {
            _ticketsService = ticketsService;
            _auth = auth;
        }
    }
}