import { AccountBox, Groups, Home, PersonAdd, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Leftbar = () => {
  return (
    <Box p={3} flex={2} sx={{display:{xs:"none", sm:"block"}}} >
        <List>
          <ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon component="a" href="#home">
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage"/>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon component="a" href="#market">
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Market Place"/>
            </ListItemButton>
          </ListItem>



          <ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon component="a" href="#profile">
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon component="a" href="#friends">
                <PersonAdd/>
              </ListItemIcon>
              <ListItemText primary="Friends"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon component="a" href="#group">
                <Groups/>
              </ListItemIcon>
              <ListItemText primary="Groups"/>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon component="a" href="#settings">
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon component="a" href="#mode">
                <Switch/>
              </ListItemIcon>
              <ListItemText primary="Mode"/>
            </ListItemButton>
          </ListItem>

        </List>
    </Box>

  )
}

export default Leftbar;