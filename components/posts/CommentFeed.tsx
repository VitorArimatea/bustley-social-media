import CommentItem from "./CommentItem";

interface CommentFeedProps {
    comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
        {comments.map((comment) => (
            <div key={comment.id}>
                <CommentItem key={comment.id} data={comment} />
            </div>
        ))}
    </>
  );
};

export default CommentFeed;