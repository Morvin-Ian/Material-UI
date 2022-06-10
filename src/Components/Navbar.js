import styled from '@emotion/styled';
import { Javascript, MailLockRounded, NotificationImportant } from '@mui/icons-material';
import { AppBar,Avatar,Badge,InputBase,Toolbar, Typography } from '@mui/material'
import React from 'react';

const StyledNav = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")({
    backgroundColor:"white",
    padding: "0 10px",
    width:"30%",
    borderRadius:"5px"

})

const Icons = styled(Badge)({
    padding:"5px",
    margin:"5px"
})

const Navbar = () => {
  return (
    <AppBar bgcolor="wheat" p={2}  position="sticky" >
        <StyledNav>
            <Typography variant='p'>
            <Javascript/>
                Material UI
            </Typography>

            <Search><InputBase placeholder='Search...'/></Search>
            <Icons  sx={{display:"flex", gap:"20px"}}>
                <Badge color='error'  badgeContent={2}> 
                    <NotificationImportant/>
                </Badge>
                 <Badge color="error" badgeContent={3}>
                     <MailLockRounded/>
                </Badge>  
                    <Avatar/>
                
              
            </Icons>
           

        </StyledNav>
   
    </AppBar>
    
  )
}

export default Navbar
