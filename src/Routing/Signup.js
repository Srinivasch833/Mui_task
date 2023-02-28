import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link } from 'react-router-dom';

const Signup = () => {

    const avatarStyle = {
        margin: '10px auto',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
        
    };

    

    return(
        <>
        <center><h4>Registration Form</h4></center>
        <Paper sx={{
            alignItems:'center', 
            margin:'5px auto', 
            width:'400px',
            padding:'20px',
            height:'550px'
            }} 
            elevation={10}>
            <Grid style={avatarStyle} algin='center'>
                <Avatar sx={{backgroundColor:'green'}}><AccountCircleIcon /></Avatar>
                <Typography variant='h5'>Sign up</Typography>
            </Grid>
            <Grid>
                
                <Typography variant='body2' gutterBottom>Please fill the vaild details</Typography>
            </Grid>
            <form>
            <Grid container spacing={2}>
                
                <Grid item xs={12} lg={6} >
                    <TextField
                    type="text"
                    label="First Name"
                    placeholder='Enter name'
                    variant='outlined'
                    fullWidth
                    required
                    />
                </Grid>
                <Grid item xs={12} lg={6} >
                    <TextField
                    type="text"
                    label="Last Name"
                    placeholder='Enter name'
                    variant='outlined'
                    fullWidth
                    required
                    />
                </Grid>
                <Grid item xs={12} sx={6} >
                    <TextField
                    type="email"
                    label="Email"
                    placeholder='Enter Email'
                    variant='outlined'
                    fullWidth
                    required
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                    type="password"
                    label="Password"
                    placeholder='Enter Password'
                    variant='outlined'
                    fullWidth
                    required
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                    type="password"
                    label="Confirm Password"
                    placeholder='Enter Confirm Password'
                    variant='outlined'
                    fullWidth
                    required
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                    type="message"
                    label="Comment"
                    placeholder='Enter Comment'
                    variant='outlined'
                    fullWidth
                    required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                    type="submit"  
                    variant='contained'
                    color='primary'
                    fullWidth
                    >
                        Submit
                    </Button>
                 </Grid>
                 <Grid item xs={12} sx={{mt:-1}}>
                    <Typography variant='body2'>You have an account. please <a href="/">Login</a></Typography>
                 </Grid>
            </Grid>
            </form>
        </Paper>
        </>
    )
}
export default Signup