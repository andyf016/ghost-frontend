import PostCard from "./PostCard"
const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((post) => (
                <h3>{post.id}</h3>
            ))}
        </div>
    )
}

export default Posts
