namespace TowerReactDotNet.Services
{
    public class TicketsService
    {
        private readonly TicketsRepository _repo;
        private readonly EventsService _eventsService;

        public TicketsService(TicketsRepository repo, EventsService eventsService)
        {
            _repo = repo;
            _eventsService = eventsService;
        }

        internal Ticket CreateTicket(Ticket ticketData)
        {
            TowerEvent towerEvent = _eventsService.GetOneEvent(ticketData.EventId);
            if (towerEvent.IsCanceled) throw new Exception("This event is canceled");
            if (towerEvent.Capacity <= 0) throw new Exception("This event has sold out");
            towerEvent.Capacity--;
            TowerEvent updatedEvent = _eventsService.UpdatedEvent(towerEvent);
            Ticket ticket = _repo.CreateTicket(ticketData);
            ticket.Event = towerEvent;
            return ticket;
        }


        internal List<Ticket> GetAttendees(int id)
        {
            List<Ticket> tickets = _repo.GetAttendees(id);
            return tickets;
        }

        internal List<Ticket> GetMyTickets(string id)
        {
            List<Ticket> tickets = _repo.GetMyTickets(id);
            return tickets;
        }
        internal string DeleteTicket(int id, string accountId)
        {
            Ticket ticket = _repo.GetOne(id);
            if (ticket == null) throw new Exception($"No ticket with id: {id}");
            if (ticket.AccountId != accountId) throw new Exception("This is not your ticket to delete");
            _repo.DeleteTicket(id);
            TowerEvent towerEvent = _eventsService.GetOneEvent(ticket.EventId);
            towerEvent.Capacity++;
            _eventsService.UpdatedEvent(towerEvent);
            return "Your ticket has been deleted";
        }
    }
}