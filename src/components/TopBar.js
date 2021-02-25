import {useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import "fontsource-roboto";

const TopBar = ({onAdd}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    console.log({value})
    //onAdd(value)
  };
    return (
        <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon onClick={handleClick} />
                  <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} value={''} >All</MenuItem>
        <MenuItem onClick={handleClose} value={'list_roasts'}>Boasts</MenuItem>
        <MenuItem onClick={handleClose} value={'list_boasts'}>Roasts</MenuItem>
      </Menu>
                  </IconButton>
                  <Typography variant="h6">
                  Stuff goes here
                  </Typography>
                 
                
              </ToolBar>
            </AppBar>
    )
}

export default TopBar
