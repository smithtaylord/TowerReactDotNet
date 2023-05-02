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

        internal TowerEvent EditEvent(int id1, TowerEvent eventData, string id2)
        {
            throw new NotImplementedException();
        }

        internal List<TowerEvent> GetAllEvents()
        {
            List<TowerEvent> allEvents = _repo.GetAllEvents();
            return allEvents;
        }

        internal TowerEvent GetOneEvent(int id)
        {
            TowerEvent oneEvent = _repo.GetOneEvent(id);
            if (oneEvent == null) throw new Exception($"No event found with id: {id}");
            return oneEvent;
        }
    }
}