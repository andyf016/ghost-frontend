import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button"
import "fontsource-roboto";

const Header = ({onAdd}) => {
    return (
        <Container maxWidth='md'>
        <Typography variant="h4">
           Anonymous Blather with Sentiment
        </Typography>
        <br/>
        <Button onClick={onAdd}>Click</Button>
        </Container>
    )
}

export default Header
