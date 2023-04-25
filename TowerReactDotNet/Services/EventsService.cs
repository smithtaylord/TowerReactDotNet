namespace TowerReactDotNet.Services
{
    public class EventsService
    {
        private readonly EventsRepository _repo;

        public EventsService(EventsRepository repo)
        {
            _repo = repo;
        }
    }
}