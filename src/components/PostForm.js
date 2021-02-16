import TextField from '@material-ui/core/TextField'
const handleSubmit = (e) =>{
    console.log(e)
}


const PostForm = () => {
    return (
        <form onSubmit={handleSubmit}>
            <TextField variant='filled'/>
        </form>
    )
}

export default PostForm
