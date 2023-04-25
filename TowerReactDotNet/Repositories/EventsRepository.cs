namespace TowerReactDotNet.Repositories
{
    public class EventsRepository
    {
        private readonly IDbConnection _db;

        public EventsRepository(IDbConnection db)
        {
            _db = db;
        }
    }
}