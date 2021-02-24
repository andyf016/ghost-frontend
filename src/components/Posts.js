import PostCard from "./PostCard"
import "./componentcss.css"
const Posts = ({posts, onUp, onDown}) => {
    return (
        <div className='Posts'>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} onUp={onUp} onDown={onDown} />
            ))}
        </div>
    )
}

export default Posts
