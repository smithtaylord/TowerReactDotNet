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
        internal string DeleteEvent(int id, string userId)
        {
            TowerEvent towerEvent = this.GetOneEvent(id);
            if (towerEvent.CreatorId != userId) throw new Exception("You are not allowed to delete this event");
            _repo.DeleteEvent(id);
            return $"{towerEvent.Name} has been deleted";
        }
    }
}