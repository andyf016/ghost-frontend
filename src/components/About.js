import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";

const About = () => {
    return (
        <div>
            <Typography align='center' variant='h4'>Version 1.0.0</Typography>
            <Typography align='center'>
            <Link to='/'>Back</Link></Typography>
        </div>
    )
}

export default About
