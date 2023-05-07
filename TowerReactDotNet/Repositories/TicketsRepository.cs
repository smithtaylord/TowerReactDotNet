namespace TowerReactDotNet.Repositories
{
    public class TicketsRepository
    {
        private readonly IDbConnection _db;

        public TicketsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal Ticket CreateTicket(Ticket ticketData)
        {
            string sql = @"
            INSERT INTO
            tickets
            (eventId, accountId)
            VALUES
            (@eventId, @accountId);
            SELECT LAST_INSERT_ID();
            "; int id = _db.ExecuteScalar<int>(sql, ticketData);
            ticketData.Id = id;
            return ticketData;
        }

        internal List<Ticket> GetMyTickets(string id)
        {
            string sql = @"
            SELECT
            t.*,
            e.*
            FROM tickets t
            JOIN events e ON t.accountId = e.creatorId
            WHERE t.accountId = @id;
            "; List<Ticket> tickets = _db.Query<Ticket, TowerEvent, Ticket>(sql, (t, te) =>
            {
                t.Event = te;
                return t;
            }, new { id }).ToList();
            return tickets;
        }
    }
}