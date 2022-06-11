import { ExpandMoreOutlined, FavoriteOutlined, MoreVertOutlined, ShareLocation } from '@mui/icons-material';
import { Avatar, Box, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import React from 'react';



const Center = () => {
  return (
    <Box bgcolor="whitesmoke" p={3} flex={4}>

    <CardActionArea sx={{ width: 700 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined />
          </IconButton>
        }
        title="Morvin Ian"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="250"
        src="https://images.unsplash.com/photo-1654881212180-86af196fd8dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteOutlined />
        </IconButton>
        <IconButton aria-label="share">
          <ShareLocation />
        </IconButton>  
          <ExpandMoreOutlined />
      
      </CardActions>
    
        <CardContent>
          
        </CardContent>
  
    </CardActionArea >
    </Box>

  ) 
    }


export default Center;