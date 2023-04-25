namespace TowerReactDotNet.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CoverImg { get; set; }
        public string Location { get; set; }
        public string Capacity { get; set; }
        public DateTime StartDate { get; set; }
        public bool IsCanceled { get; set; }
        public string CreatorId { get; set; }
        public Profile Creator { get; set; }
    }
}