import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button"
import "fontsource-roboto";

const Header = ({onAdd, showAdd}) => {
    return (
        <Container maxWidth='md'>
        <Typography variant="h4">
           Anonymous Blather with Sentiment
        </Typography>
        <br/>
        <Button onClick={onAdd} color={'primary'}>{showAdd ? 'Close Form' : 'Post Reply'}</Button>
        </Container>
    )
}

export default Header
