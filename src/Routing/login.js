import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'

const Login = () => {
  return (
    <>
    <div>Login Page</div>
    <Paper elevation={10} sx={{width:'400px', margin:'20px auto', p: '20px'}}>
        <Grid sx={{
            alignItems:'center',
            display:'flex',
            flexDirection:'column',
            margin: '20px auto',
            
        }}>
            <Avatar sx={{backgroundColor: 'green'}}>S</Avatar>
            <Typography variant='h5'>Login</Typography>
        </Grid>
        <Grid item>
            <Typography gutterBottom variant='body2'>Please login with valid details</Typography>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12}>
                <TextField 
                type="text"
                label="Email"
                placeholder='Enter Eamil'
                variant='outlined'
                fullWidth
                required
                />
            </Grid>
            <Grid item sx={12} lg={12}>
                <TextField 
                type="password"
                label="Password"
                placeholder='Enter Password'
                variant='outlined'
                fullWidth
                required
                />
            </Grid>
            <Grid item xs={12} lg={12}>
                <Button 
                type="submit"
                variant='contained'
                fullWidth
                
                >Submit</Button>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Typography>You don't have account please Sign up</Typography>
            </Grid>

        </Grid>

    </Paper>
    </>
  )
}

export default Login