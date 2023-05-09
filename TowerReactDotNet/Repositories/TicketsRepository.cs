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



        internal List<Ticket> GetAttendees(int id)
        {
            string sql = @"
            SELECT
            t. *,
            e. *,
            a. *
            FROM tickets t
            JOIN accounts a ON t.accountId = a.id
            JOIN events e ON t.eventId = e.id
            WHERE eventId = @id;
            "; List<Ticket> tickets = _db.Query<Ticket, TowerEvent, Account, Ticket>(sql, (t, te, a) =>
            {
                t.Account = a;
                t.Event = te;
                return t;
            }, new { id }).ToList();
            return tickets;
        }

        internal List<Ticket> GetMyTickets(string id)
        {
            string sql = @"
            SELECT
            t.*,
            e.*,
            a.*
            FROM tickets t
            JOIN events e ON t.eventId = e.id
            JOIN accounts a ON t.accountId = a.id
            WHERE t.accountId = @id;
            "; List<Ticket> tickets = _db.Query<Ticket, TowerEvent, Account, Ticket>(sql, (t, te, a) =>
            {
                t.Account = a;
                t.Event = te;
                return t;
            }, new { id }).ToList();
            return tickets;
        }

        internal Ticket GetOne(int id)
        {
            string sql = @"
            SELECT
            *
            FROM tickets
            WHERE id = @id;
            "; Ticket ticket = _db.Query<Ticket>(sql, new { id }).FirstOrDefault();
            return ticket;
        }

        internal void DeleteTicket(int id)
        {
            string sql = @"
            DELETE FROM
            tickets
            WHERE id = @id;
            "; _db.Execute(sql, new { id });
        }
    }
}