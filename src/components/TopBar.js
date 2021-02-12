import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const TopBar = () => {
    return (
        <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                  <Typography variant="h6">
                  Stuff goes here
                  </Typography>
                  <Button>Login</Button>
                </IconButton>
              </ToolBar>
            </AppBar>
    )
}

export default TopBar
