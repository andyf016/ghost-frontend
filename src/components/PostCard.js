import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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

    return (
        <Card className={classes.root}>
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
        <Button size="small">Learn More</Button>
        <Button size="small" onClick={() => onUp(post.id)}>Love it</Button>
        <Button size="small" onClick={() => onDown(post.id)}>Hate it</Button>
      </CardActions>
    </Card>
    )
}

export default PostCard
