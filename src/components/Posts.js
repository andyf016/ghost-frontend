import PostCard from "./PostCard"
const Posts = ({posts, onUp, onDown}) => {
    return (
        <div>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} onUp={onUp} onDown={onDown} />
            ))}
        </div>
    )
}

export default Posts
