import usePosts from "@/hooks/usePosts";

import PostItem from "./PostItem";

interface postFeedProps {
    userId?: string;

}

const PostFeed: React.FC<postFeedProps> = ({ userId }) => {
    const { data: posts = [] } = usePosts(userId);
    
    return (
        <>
            {posts.map((post: Record<string, any>) => (
                <PostItem
                    userId={userId}
                    key={post.id}
                    data={post}
                />
            ))}
        </>
    );
}

export default PostFeed;