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

const TopBar = ({onSort, onKey}) => {
const [anchorEl, setAnchorEl] = useState(null);
//const [boastState, setboastState] = useState('list_boasts')
//const [roastState, ]

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const handlePopular = () =>{
  onKey('total_votes')
  handleClose()
  
}

const handleCreated = () =>{
  onKey('created')
  handleClose()
  
}

const handleBoastSort = () =>{
  onSort('list_boasts/')
  handleClose()
}

const handleRoastSort = () =>{
  onSort('list_roasts/')
  handleClose()
}

const handleAllSort = () =>{
  onSort('')
  handleClose()
}


    return (
        <AppBar>
              <ToolBar>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  <MenuIcon />
                  </IconButton>

                  <Typography variant="h6">
                  Sort Posts
                  </Typography>
                  <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      ><Typography>
        <MenuItem onClick={handleBoastSort}>Boasts</MenuItem>
        <MenuItem onClick={handleRoastSort}>Roasts</MenuItem>
        <MenuItem onClick={handleAllSort}>All</MenuItem>
        <MenuItem onClick={handlePopular}>Most Popular</MenuItem>
        <MenuItem onClick={handleCreated}>Newest</MenuItem>
     </Typography> </Menu>
              </ToolBar>
            </AppBar>
    )
}

export default TopBar
