namespace TowerReactDotNet.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public int EventId { get; set; }
        public string AccountId { get; set; }

        public Account Account { get; set; }
        public TowerEvent Event { get; set; }
    }
}