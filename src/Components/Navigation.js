import React from "react";
import { AppBar, Badge, Box, Button, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import './navbar.css'
const NavigationBar = () => {
  
  return (
    <>
      <AppBar elevation={0} sx={{
        backgroundColor:'white',
        borderBottom:'2px solid red',
        
        }}>
        <Toolbar>
          <Box component="div" sx={{ 
        display:'flex', 
        justifyContent:'space-between',
        width:'100%',
        alignItem: 'center'
        }}>
            <Box sx={{display: 'flex'}}>
              <DirectionsBikeIcon sx={{color:'red', width:'100px'}}/>
            </Box>

            <Box sx={{display: 'flex'}}>
              <Typography sx={{marginRight: '20px', cursor: 'pointer',color:'#616161'}} >Home</Typography>
              <Typography sx={{marginRight: '20px', cursor: 'pointer',color:'#616161'}} >About</Typography>
              <Typography sx={{marginRight: '20px', cursor: 'pointer',color:'#616161'}} >Products</Typography>
              <Typography sx={{marginRight: '20px', cursor: 'pointer',color:'#616161'}} >Contact</Typography>
            </Box>
            <Box sx={{
                display:'flex', 
                justifyContent:'center',
                alignItems:'center', 
                marginRight:'20px',
                
                }}>
              <Button disableElevation variant="contained" sx={{marginRight:'5px'}}>Log in</Button>
              <Badge badgeContent={4} color="primary">
                <ShoppingBasketIcon color="action" />
              </Badge>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavigationBar;
