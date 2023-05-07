namespace TowerReactDotNet.Services
{
    public class TicketsService
    {
        private readonly TicketsRepository _repo;

        public TicketsService(TicketsRepository repo)
        {
            _repo = repo;
        }
    }
}