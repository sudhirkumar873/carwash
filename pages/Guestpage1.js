import { Box, Grid, Typography, styled, Paper, Container, TextField, Button, AppBar, Toolbar } from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore';
import CallIcon from '@mui/icons-material/Call';
import serviceimg from '../assets/Service Location.png'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from '@mui/icons-material/Copyright';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { createTheme } from '@mui/material/styles';
import imageUrl from '../assets/group_carwash.png';
import DrawerComp from "./Drawers";
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
}));
const paperStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundImage: `url(${serviceimg})`

};


const formStyle = {
    width: '100%', // Full width
    marginTop: '5%',
};

const submitButtonStyle = {
    margin: '20px 0',
    color: 'white',
    backgroundColor: '#002C4F'

};
const img = {
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover',      // Make the background image cover the container



};
const Colors = createTheme({
    palette: {
        primary: {
            main: '#002C4F',

            //  backgroundj: '#CCFFCC',
            color: ' #FFFFFF',
            //  color1:' #00000080',
            //  inactive:"#FF0000",
            //  pending:"#ffc804"
        },

        background: {
            default: '#002C4F',
            //    card: ' #7797FE',
            text: '#FFFFFF',
            //   background1: '#7797FE',
        },
        color: {
            //    maincolor: '#000000',
            //    body:' #FFFFFF',
            HeadingText: '013C6B'

        },
        shadows: {
            boxshadow: '4px 4px 4px 0px #00000040',
        }

    },
});

function Contactus() {
    // const imageUrl='carwash.png';
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                {/* app bar */}
                <AppBar position="static" sx={{ backgroundColor: '#002C4F', background: Colors.palette.background.default }}>
                    <Toolbar>
                        {/* hello */}
                        <DrawerComp />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "2%", cursor: 'pointer' }}>
                            Logo
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { md: '50px', xl: "100px", sm: "25px" }, display: { xs: "none", sm: "flex" } }}>
                            <Button color="inherit">Services</Button>
                            <Button color="inherit">About Us</Button>
                            <Button
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'blue',
                                    cursor: 'pointer', // Change cursor to pointer on hover
                                    '&:hover': {
                                        backgroundColor: 'white', // Change background color on hover
                                        color: 'red', // Change text color on hover
                                    },
                                }}
                                color="inherit"
                            >Contact Us</Button>
                            <Button color="inherit" backgroundColor='secondary'>Profile</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                {/* Image-car */}
                <Box
                    sx={{
                        // backgroundColor: "#F5F5F5", // Background color
                        backgroundImage:`url(${imageUrl})`, // Background image URL
                        backgroundSize: 'cover', // Background image size
                        backgroundPosition: 'center', // Background image position
                        height: '40vh', // Full viewport height
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* Your content goes here */}
                </Box>

            </Box>
            <Box sx={{
                // backgroundImage: { serviceimg },
                backgroundColor: ' #F5F5F5',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // borderRadius:'5%'
            }}
            >
                <Box>
                    <Grid marginBottom={'2%'} marginInline={'-5%'}>
                        <Typography variant="h6" style={{ color: 'darkblue' }}>
                            <b>Contact Us</b>
                        </Typography>
                        <Typography sx={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Grid>
                    <Box>
                        <Container>
                            <Paper elevation={0} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', backgroundColor: ' #F5F5F5', }}>
                                <Paper elevation={0} spacing={2} sx={{ marginInline: '5%', backgroundColor: ' #F5F5F5' }}>
                                    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                                        <Paper elevation={0} sx={{ backgroundColor: '#F5F5F5', marginInline: '-5%', }}>
                                            <StyledPaper

                                                sx={{
                                                    display: 'flex',
                                                    spacing: 5,
                                                    my: 1,
                                                    mx: 5,
                                                    p: 2,
                                                    marginBottom: '2%'
                                                }}
                                            >
                                                <Grid container wrap="nowrap" spacing={6}>
                                                    <Grid item marginTop='5%'>
                                                        <HourglassEmptyIcon />
                                                    </Grid>
                                                    <Grid item >
                                                        <Typography>
                                                            <b>Hours</b><br />
                                                            Mon-Fri : 9 AM - 7 PM<br />
                                                            Sat : 9 AM - 2 PM
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </StyledPaper>
                                            <StyledPaper
                                                sx={{
                                                    my: 1,
                                                    mx: 3,
                                                    p: 2,
                                                    marginBottom: '2%'
                                                }}
                                            >
                                                <Grid container wrap='wrap' spacing={4}>
                                                    <Grid item marginTop='5%'>
                                                        <CallIcon />
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Typography>
                                                            <b>Contact:</b><br />
                                                            mifs@info.com<br />
                                                            (303) 985-0105, (303) 355-0105
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </StyledPaper>
                                            <StyledPaper
                                                sx={{
                                                    my: 1,
                                                    mx: 1,
                                                    p: 2,
                                                }}
                                            >
                                                <Grid container wrap="nowrap" spacing={6}>
                                                    <Grid item marginTop='5%'>
                                                        <ExploreIcon />
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Typography>
                                                            <b>Address:</b><br />
                                                            2972 Westheimer Rd. Santa Ana,<br /> Illinois 85486
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </StyledPaper>
                                        </Paper>
                                    </Box>
                                </Paper>
                                <Paper>
                                    <Container component="main" maxWidth="xs">
                                        <Grid container style={img}>
                                            <Paper elevation={0} style={{ ...paperStyle, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                                                {/* <Typography variant="h6">Enter your credentials here:</Typography> */}
                                                <form style={formStyle} noValidate>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="firstName"
                                                                label="First Name"
                                                                name="firstName"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="lastName"
                                                                label="Last Name"
                                                                name="lastName"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="contactNumber"
                                                                label="Contact Number"
                                                                name="contactNumber"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                variant="outlined"
                                                                fullWidth
                                                                id="alternateNumber"
                                                                label="Alternate Number"
                                                                name="alternateNumber"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="email"
                                                                label="Email Address"
                                                                name="email"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography variant='h4'>Address<br /></Typography>
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="Locality / Building / Street / Society"
                                                                label="Locality / Building / Street / Society"
                                                                name="Locality / Building / Street / Society"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="city/Town"
                                                                label="City / Town  District"
                                                                name="city/Town"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id=" District"
                                                                label=" District"
                                                                name=" District"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={8}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="State"
                                                                label="State"
                                                                name="State"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="Pincode"
                                                                label=" Pincode"
                                                                name="Pincode"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Button
                                                        type="submit"
                                                        
                                                        variant="contained"
                                                        color="primary"
                                                        style={submitButtonStyle}
                                                    >
                                                        Submit
                                                    </Button>
                                                </form>
                                            </Paper>
                                        </Grid>
                                    </Container>
                                </Paper>
                            </Paper>
                        </Container>
                    </Box>
                    <Box sx={{ marginInline: '-5%' }}>&nbsp;
                        <Grid padding='0px 10px 0px 10px'>
                            <Typography marginBottom='3%' variant="h6" style={{ color: 'darkblue' }}>
                                <b>Frequently Asked Questions(FAQs)</b>
                            </Typography>
                        </Grid>
                        <Grid padding='0px 10px 0px 10px'>
                            <Typography marginBottom='1%'>
                                <b>Ques.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, ea commodo consequat. Duis aute irure dolor in reprehenderit ?<br />
                                Ans. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                            </Typography>&nbsp;
                            <Typography marginBottom='1%'>
                                <b>Ques.</b> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ?<br />
                                Ans. Ea commodo consequat. Duis aute irure dolor in reprehenderit.<br />
                            </Typography>&nbsp;
                            <Typography>
                                <b>Ques.</b> In voluptate velit esse cillum dolore eu fugiat nulla pariatur ?<br />
                                Ans. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                            </Typography>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box

                sx={{
                    backgroundColor: '#002C4F',

                    Color: 'white',
                    width: '100%',
                    marginTop: "3%",

                }}>
                <Container maxWidth="xl">
                    <Grid container spacing={2} sx={{ marginLeft: "2%" }}>
                        <Grid item xs={15} sm={3} md={3} marginTop='2%' sx={{ color: "white" }} >
                            <Typography variant="h4" >
                                <b> Logo </b>
                            </Typography>
                            <Typography sx={{ marginTop: "11%" }}>

                                About us: Lorem ipsum dolor sit amet,<br />
                                consectetur adipiscing elit,sed do eiusmod <br />
                                tempor incididunt ut labore et dolore magna <br />
                                aliqua. Ut enim ad minim veniam,quis nostrud <br />
                                exercitation.
                            </Typography>

                            <Typography variant="body2" color="white" sx={{ marginTop: '12%', marginBottom: "17%" }}>
                                <CopyrightIcon />  2021 Car Wash.All Rights Reserved
                            </Typography>

                        </Grid>

                        <Grid item xs={15} sm={2} marginTop='4%'>
                            <Typography variant="body1" color="white" gutterBottom>
                                <b> PAGES</b>
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '11%' }}>
                                Services
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom >
                                About Us
                            </Typography>
                            {/* <Typography variant="body2" color="white" gutterBottom>
             Orders and Returns
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
             Advanced Search 
            </Typography> */}
                            <Typography variant="body2" color="white" gutterBottom>
                                Contact Us
                            </Typography>

                        </Grid>

                        <Grid item xs={15} sm={2} marginTop='4%'>
                            <Typography variant="body1" color="white" gutterBottom>
                                <b> CARS</b>
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '11%' }}>
                                HatchBack
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom>
                                Sedan
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom>
                                SUV
                            </Typography>
                            {/* <Typography variant="body2" color="white" gutterBottom>
             Advanced Search 
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
            Contact Us
            </Typography> */}

                        </Grid>

                        <Grid item xs={15} sm={2} marginTop='4%' >
                            <Typography variant="body1" color="white" gutterBottom>
                                <b>SERVICES </b>
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '11%' }}>
                                Routine Clean
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom>
                                Dry Clean
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom>
                                Deep Clean
                            </Typography>
                            {/* <Typography variant="body2" color="white" gutterBottom>
             Advanced Search 
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
            Contact Us
            </Typography>
             */}
                        </Grid>

                        <Grid item xs={15} sm={3} marginTop='4%' >
                            <Typography variant="body2" color="grey" gutterBottom>
                                (303) 985-0105,(303) 355-0105
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '10%' }}>
                                mifs@info.com
                            </Typography>
                            <Typography variant="body2" color="grey" gutterBottom sx={{ marginTop: '10%' }}>
                                2972 Westheimer Rd.Santa Ana,<br />lllinois 85486
                            </Typography>
                            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '10%' }}>
                                <InstagramIcon />    <FacebookIcon sx={{ marginLeft: '15%' }} />     <TwitterIcon sx={{ marginLeft: '15%' }} />
                            </Typography>
                        </Grid>
                    </Grid>

                </Container>


            </Box>
        </div>
    );
}

export default Contactus;
