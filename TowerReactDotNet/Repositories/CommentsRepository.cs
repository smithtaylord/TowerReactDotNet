namespace TowerReactDotNet.Repositories
{
    public class CommentsRepository
    {
        private readonly IDbConnection _db;

        public CommentsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal Comment CreateComment(Comment commentData)
        {
            string sql = @"
            INSERT INTO
            comments(
                body,
                eventId,
                creatorId
            ) VALUES (
                @body,
                @eventId,
                @creatorId
            );
            SELECT LAST_INSERT_ID();
            "; int id = _db.ExecuteScalar<int>(sql, commentData);
            commentData.Id = id;
            return commentData;
        }

        internal List<Comment> GetComments(int id)
        {
            string sql = @"
            SELECT
            c.*,
            a.*
            FROM comments c
            JOIN accounts a ON c.creatorId = a.id
            WHERE eventId = @id;
            "; List<Comment> eventComments = _db.Query<Comment, Profile, Comment>(sql, (c, p) =>
            {
                c.Creator = p;
                return c;
            }, new { id }).ToList();
            return eventComments;
        }
    }
}