import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";


const Footer = () => {
    return (
        <footer>
            <br/>
            <Typography align="center">Copyright &copy; 2021</Typography>
            <Typography align="center"><Link to='/about'>About</Link></Typography>
        </footer>
    )
}

export default Footer
