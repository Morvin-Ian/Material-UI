import React from 'react'
import Navbar from '../Components/Navbar';
import Leftbar from '../Components/Leftbar';
import Center from '../Components/Center';
import Rightbar from '../Components/Rightbar';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';


const Home = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" justifyContent="space-between">
        <Leftbar/>
        <Center/>
        <Rightbar/>
      </Stack>

    </Box>
  )
}

export default Home;  