namespace TowerReactDotNet.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly AccountService _accountService;
    private readonly Auth0Provider _auth0Provider;
    private readonly TicketsService _ticketsService;

    public AccountController(AccountService accountService, Auth0Provider auth0Provider, TicketsService ticketsService)
    {
        _accountService = accountService;
        _auth0Provider = auth0Provider;
        _ticketsService = ticketsService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<Account>> Get()
    {
        try
        {
            Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
            return Ok(_accountService.GetOrCreateProfile(userInfo));
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("tickets")]
    [Authorize]
    public async Task<ActionResult<List<Ticket>>> GetMyTickets()
    {
        try
        {
            Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
            List<Ticket> tickets = _ticketsService.GetMyTickets(userInfo.Id);
            return Ok(tickets);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
    [HttpPut]
    [Authorize]
    public async Task<ActionResult<Account>> Edit([FromBody] Account accountData)
    {
        try
        {
            Account userInfo = await _auth0Provider.GetUserInfoAsync<Account>(HttpContext);
            string userEmail = userInfo.Email;
            Account updatedInfo = _accountService.Edit(accountData, userEmail);
            return Ok(updatedInfo);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
