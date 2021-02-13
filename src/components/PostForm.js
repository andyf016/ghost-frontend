import TextField from '@material-ui/core/TextField'
const handleSubmit = (e) =>{
    console.log(e)
}


const PostForm = () => {
    return (
        <form onSubmit={handleSubmit}>
            <TextField />
        </form>
    )
}

export default PostForm
