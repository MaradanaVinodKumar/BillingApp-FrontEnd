import React from 'react';
import NavBar from './NavBar';
import HeaderBar from './HeaderBar';
import { Box, Container } from '@mui/material';

export default function BillingLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <NavBar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <HeaderBar />
        <Box sx={{width:"100%"}}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}