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
    backgroundColor: '#ff9100',
  },

  rootBoast: {
    minWidth: 275,
    marginTop: 15,
    backgroundColor: '#2196f3',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
});


const PostCard = ({post, onUp, onDown}) => {
    const classes = useStyles();


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
      <Typography variant="button">
      <CardActions>
        <Button size="small" onClick={() => onUp(post.id)}>Love it</Button>
        <Button size="small" onClick={() => onDown(post.id)}>Hate it</Button>
      </CardActions></Typography>
    </Card>
    )
}

export default PostCard
