import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ProfileScreen = () => {
  return (
    <div>
      <Grid container className='main-grid'>
       <Link style={{color:"#607163"}}> <Typography>Edit Profile</Typography></Link>
        <Typography className='my-profile'>My Profile</Typography>
        <Grid  lg={5} >
        <Typography>Full Name</Typography>
        <TextField fullWidth/>
        <Typography>Email Id</Typography>
        <TextField fullWidth/>
        <Typography>Desgination</Typography>
        <TextField fullWidth/>
        <Typography>Block</Typography>
        <TextField fullWidth/>
        </Grid>
        <Grid  lg={5} className='second-grid'>
        <Typography>User Name</Typography>
        <TextField fullWidth/>
        <Typography>Mobile Number</Typography>
        <TextField fullWidth/>
        <Typography>District</Typography>
        <TextField fullWidth/>
        </Grid>
        <Grid>
        <Button variant='contained' className=''>Submit</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProfileScreen