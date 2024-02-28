import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RxAvatar } from "react-icons/rx";

const MyProfileComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <RxAvatar
          style={{ fontSize: '45px', cursor: 'pointer' }}
          onClick={handleClick}
        />
  
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>View Profile</MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
          
        </Menu>
      </div>
    );
  }
  
  export default MyProfileComponent;