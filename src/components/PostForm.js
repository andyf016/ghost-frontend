import {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from "@material-ui/core/Checkbox";

import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { SentimentVeryDissatisfied } from '@material-ui/icons';
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
            icon={<SentimentVerySatisfied />}
            checkedIcon={<SentimentVeryDissatisfied />}
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
