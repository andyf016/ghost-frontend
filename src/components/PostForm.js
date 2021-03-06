import {useState} from 'react'
import TextField from '@material-ui/core/TextField'

import { green, red } from '@material-ui/core/colors'
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core'

import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { SentimentVeryDissatisfied } from '@material-ui/icons';
import './componentcss.css'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(16),
      height: theme.spacing(10),
    },
    
  },
}));

const PostForm = ({onAdd}) => {
  const classes = useStyles();
  const [body, setText] = useState('')
  const [checked, setChecked] = useState(true);
  
  const handleSubmit = (e) =>{
    let sentiment = 'r'
    if(!checked){
      sentiment = 'b'
    }
      e.preventDefault()
      if(!body){
        alert("please add some text")
        return
      }
      
      onAdd({body, sentiment})
      setText('')
      setChecked(false)
      //console.log(e)
  }
    return (
      <div className='Form-paper'>
      <Paper className={classes.root} variant='elevation' elevation={3}>
        <form className='Post-form' onSubmit={handleSubmit}>
            <FormControlLabel
        control={
          <Checkbox
            value={checked}
            checked={checked}
            icon={<SentimentVerySatisfied style={{ color: green[500] }}/>}
            checkedIcon={<SentimentVeryDissatisfied style={{ color: red[500] }}/>}
            onChange={(e) => setChecked(e.currentTarget.checked)}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label='Sentiment'
      />    <div className='Text-field'>
            <TextField multiline rows={5} fullWidth variant='outlined' type={body} value={body} placeholder="your thoughts" onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='Submit-button'>
            <Button color='primary' variant='outlined' onClick={handleSubmit}>
              Submit!
            </Button></div>
        </form>
        </Paper>
        </div>
    )
}

export default PostForm
