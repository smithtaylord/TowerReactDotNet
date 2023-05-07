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
    }
}