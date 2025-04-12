import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Avatar,
} from '@mui/material';

export default function HeaderBar() {
  return (
    <AppBar position="static" color="white" sx={{boxShadow:"9px 4px 10px #ebebeb"}} elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#fff', width: '50%' }}>

        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <Avatar sx={{ bgcolor: 'primary.main', ml: 1 }}>M</Avatar> 
          <Typography variant="subtitle1" sx={{ ml: 1, color: '#000' }}>
            Manideep Motors
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}