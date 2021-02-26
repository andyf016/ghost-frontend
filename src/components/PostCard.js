import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./componentcss.css"
const useStyles = makeStyles({
  rootRoast: {
    minWidth: 275,
    marginTop: 15,
    backgroundColor: '#ff5722',
  },

  rootBoast: {
    minWidth: 275,
    marginTop: 15,
    backgroundColor: '#03a9f4',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const PostCard = ({post, onUp, onDown}) => {
    const classes = useStyles();

    const fixDate = (utcDate) => {
      let theDate = new Date(utcDate)
      //console.log(theDate)
      return theDate
    }

    return (
        <Card className={(post.sentiment === 'b') ? classes.rootBoast : classes.rootRoast}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.body}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {(post.sentiment === 'b') ? 'Boast' : 'Roast'}
        </Typography>
        <Typography variant="body2" component="p">
          Popularity
          <br />
          {post.total_votes}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small"></Button>
        <Button size="small" onClick={() => onUp(post.id)}>Love it</Button>
        <Button size="small" onClick={() => onDown(post.id)}>Hate it</Button>
      </CardActions>
    </Card>
    )
}

export default PostCard
