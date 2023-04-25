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
            SELECT LAST_INSERT_ID():
            "; int id = _db.ExecuteScalar<int>(sql, eventData);
            eventData.Id = id;
            return eventData;
        }
    }
}