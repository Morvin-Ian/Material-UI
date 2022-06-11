import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
   
   
    <Box bgcolor="white" flex={2} sx={{display:{xs:"none", sm:"block"}}}>
     
      <AvatarGroup max={4}>
 
        <Avatar alt="Remy Sharp" src="/static/images/avata/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avaa/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avataa3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </Box>

  )
}

export default Rightbar