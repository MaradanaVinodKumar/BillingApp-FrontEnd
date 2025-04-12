'use client';
import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { BillingIcon, HistoryIcon, Logo, LogoutIcon, SettingsIcon } from '@/constants/images';
import { COLOR_BLACK, COLOR_BLUE_DARK, COLOR_BLUE_LIGHT, COLOR_CALL_WHITE, COLOR_WHITE } from '@/constants/colors';

const navItems = [
  { text: 'Billing', icon: BillingIcon, route: '/billing' },
  { text: 'History', icon: HistoryIcon, route: '/history' },
//   { text: 'Stock Manager', icon: StockManagerIcon, route: '/stock-manager' },
//   { text: 'Customers', icon: CustomersIcon, route: '/customers' },
  { text: 'Settings', icon: SettingsIcon, route: '/settings' },
  { text: 'Logout', icon: LogoutIcon, route: '/signin' },
];

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const ActivePage=(path)=>{
    return pathname?.startsWith(path);
  }
    
  return (
    <Box
      sx={{
        width: 240,
        p: 2,
        borderRight:1,
        borderColor: '#D1D1D1',
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
          style={{ borderRadius: '50%', margin: '0 auto', display: 'block' }}
        />
      </Box>
      <Box sx={{
           borderBottom:1,
           borderColor: '#D1D1D1',
      }}>

      </Box>
      <List sx={{marginTop:5}}>
        {navItems.map((item) => (
          <ListItem 
              button  
              key={item.text} 
              onClick={() => router.push(item.route)}
              sx={{
                backgroundColor: ActivePage(item.route) ? COLOR_BLUE_DARK : COLOR_BLUE_LIGHT ,
                color: ActivePage(item.route) ?  COLOR_WHITE : COLOR_CALL_WHITE,
                borderRadius:2,
                marginBottom:1,
                // height:30,
                padding :"2px 8px",
                cursor:"pointer",
                "&:hover":{
                  backgroundColor:  ActivePage(item.route) ? COLOR_BLUE_DARK : '#bdbdbd' ,
                  color: ActivePage(item.route) ? COLOR_WHITE : COLOR_BLACK
                }
              }}
              
          >
            <ListItemIcon sx={{minWidth:"0px",marginRight:"10px"}} >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={22}
                  height={22} 
                />
              )}
            </ListItemIcon>
            <ListItemText sx={{
              fontSize:"12px",
              fontWeight:700
            }} primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}