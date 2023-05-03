namespace TowerReactDotNet.Repositories
{
    public class EventsRepository
    {
        private readonly IDbConnection _db;

        public EventsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal TowerEvent CreateEvent(TowerEvent eventData)
        {
            string sql = @"
            INSERT INTO
            events(
            name,
            description,
            coverImg,
            location,
            capacity,
            type,
            startDate,
            creatorId
            ) VALUES(
            @name,
            @description,
            @coverImg,
            @location,
            @capacity,
            @type,
            @startDate,
            @creatorId
            );
            SELECT LAST_INSERT_ID();
            "; int id = _db.ExecuteScalar<int>(sql, eventData);
            eventData.Id = id;
            return eventData;
        }



        internal List<TowerEvent> GetAllEvents()
        {
            string sql = @"
            SELECT
            e.*,
            a.*
            FROM events e
            JOIN accounts a ON e.creatorId = a.id
            ORDER BY e.id;
            "; List<TowerEvent> allEvents = _db.Query<TowerEvent, Profile, TowerEvent>(sql, (te, p) =>
            {
                te.Creator = p;
                return te;
            }).ToList();
            return allEvents;
        }

        internal TowerEvent GetOneEvent(int id)
        {
            string sql = @"
            SELECT
            e.*,
            a.*
            FROM events e
            JOIN accounts a ON e.creatorId = a.id
            WHERE e.id = @id;
            "; TowerEvent oneEvent = _db.Query<TowerEvent, Profile, TowerEvent>(sql, (te, p) =>
            {
                te.Creator = p;
                return te;
            }, new { id }).FirstOrDefault();
            return oneEvent;
        }

        internal int DeleteEvent(int id)
        {
            string sql = @"
            UPDATE events
            SET
            isCanceled = true
            WHERE id = @id;
            ";
            int rows = _db.Execute(sql, new { id });
            return rows;
        }


    }
}