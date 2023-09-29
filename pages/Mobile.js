import React from 'react';
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import car1 from '../assets/backcar.png';


function RegisterPage() {
  const paperStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    
  };

  const formStyle = {
    width: '100vh', // Full width
    height:'60vh',
    // marginTop: '40%',

  };

  
  const img={
    backgroundImage: `url(${car1})`,
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover',      // Make the background image cover the container
  };

  return (
    <Box
      sx={{
        
        backgroundImage: 'radial-gradient(ellipse farthest-side at right bottom, #023159,#1F476A,#F5F5F5)',
        backgroundColor: '#023159',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Grid container style={img} sx={{marginTop:'30%', marginBottom:'10%'}}>
          <Paper elevation={3} style={paperStyle} >
            <Button sx={{ marginLeft: '-80%', fontSize: '800' }}>
              <b>{"<"}Log in</b>
            </Button>
            <Typography variant="h6">Enter your credentials here:</Typography>
            <form style={formStyle} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  
                </Grid>
                </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default RegisterPage;