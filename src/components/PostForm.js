import {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button"

import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { SentimentVeryDissatisfied } from '@material-ui/icons';




const PostForm = () => {
  
  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(e)
  }

    const [checked, setChecked] = useState(true);
    return (
        <form onSubmit={handleSubmit}>
            <TextField variant='filled'/>
            <Button color={'primary'} variant={'outlined'} onClick={handleSubmit}>
              Submit!
            </Button>
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
