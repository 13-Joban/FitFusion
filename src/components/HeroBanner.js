import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg: '212px', sm: '70px' },
        ml: {sm: '50px'},
        
    }}
        position="relative"
        p="20px"
    >
        <Typography
        color="#FA256"
        fontSize="26px"
        fontWeight="700"
        >
            Fitness Club
        </Typography>
        <Typography
            fontWeight={700}
            sx={{
                fontSize: {lg: '44px', sm: '40px'}
            }}
        >
            Sweat, Smile <br /> and Repeat

        </Typography>
        <Typography
            fontSize="22px"
            lineHeight="35px"
            mb={3}
        >
            Check out the most effective exercises

        </Typography>
        <Button
            variant='contained'
            color='error'
        >
            Explore Exercises
        </Button>
      
    </Box>
  )
}

export default HeroBanner
