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
        internal TowerEvent DeleteEvent(int id, string userId)
        {
            TowerEvent towerEvent = this.GetOneEvent(id);
            if (towerEvent.CreatorId != userId) throw new Exception("You are not the owner of this event and cannot delete it");
            towerEvent.IsCanceled = true;
            int rowsAffected = _repo.DeleteEvent(id);
            if (rowsAffected == 0) throw new Exception("Could not modify for some reason");
            if (rowsAffected > 1) throw new Exception("Something went very wrong and you edited more than one row");
            return towerEvent;
        }

    }
}