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

        [HttpPost]
        [Authorize]
        async public Task<ActionResult<Ticket>> CreateTicket([FromBody] Ticket ticketData)
        {
            try
            {
                Account userInfo = await _auth.GetUserInfoAsync<Account>(HttpContext);
                ticketData.AccountId = userInfo.Id;
                Ticket ticket = _ticketsService.CreateTicket(ticketData);
                ticket.Account = userInfo;
                return Ok(ticket);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}