import { useLocation } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button"
import "fontsource-roboto";

const Header = ({onAdd, showAdd}) => {
    const location = useLocation()
    return (
        <Container maxWidth='md'>
        <Typography variant="h4">
           Anonymous Blather with Sentiment
        </Typography>
        <br/>
        {location.pathname === '/' && <Button 
            onClick={onAdd} 
            color={showAdd ? 'primary' : 'secondary'}>
            {showAdd ? 'Close Form' : 'Post Reply'}
        </Button>}
        </Container>
    )
}

export default Header
