namespace TowerReactDotNet.Services
{
    public class EventsService
    {
        private readonly EventsRepository _repo;

        public EventsService(EventsRepository repo)
        {
            _repo = repo;
        }

        internal TowerEvent CreateEvent(TowerEvent eventData)
        {
            TowerEvent newEvent = _repo.CreateEvent(eventData);
            return newEvent;
        }
    }
}