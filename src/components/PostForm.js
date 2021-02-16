import {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from "@material-ui/core/Checkbox";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e)
}


const PostForm = () => {
    const [checked, setChecked] = useState(true);
    return (
        <form onSubmit={handleSubmit}>
            <TextField variant='filled'/><br/>
            <input type='submit' value='Save Task' className='btn btn-block' />
            <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label='Sentiment'
      />
        </form>
    )
}

export default PostForm
