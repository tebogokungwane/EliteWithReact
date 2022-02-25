import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PlayerService from '../services/PlayerService';
import { useHistory, useParams } from 'react-router-dom';


function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [secretCode, setSecretCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdatePlayer = (e) => {
    e.preventDefault();
    const player = { firstName, lastName, emailId, secretCode, password }

    if(id){

      PlayerService.updatePlayer(id, player).then((response) =>{
        history.push('/players');
      }).catch(error =>{
        console.log(error);
      })
    }
    else{

      PlayerService.createPlayer(player).then((Response) => {
        console.log(Response.data)
        history.push('/players');
      }).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {

    PlayerService.getPlayerById(id).then((response) => {
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setEmailId(response.data.emailId)
    }).catch(error => {
      console.log(error)
    })

  }, [])


  const classes = useStyles();

  const title = () =>{
    if(id){
      return  <Typography component="h1" variant="h5">Edit Player</Typography>

    }else{
      return  <Typography component="h1" variant="h5">Sign up</Typography>

    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {
          title()
        }
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
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
                autoComplete="lname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="emailId"
                label="Email Address"
                name="emailId"
                autoComplete="emailId"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="pword"
                name="passWord"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                autoFocus
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                name="Conformpassword"
                autoComplete="Cpname"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="secretcode"
                label="Secret Code"
                name="secreteCode"
                autoComplete="sccode"
                onChange={(e) => setSecretCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>

              <Typography component="h3">
                <InfoIcon />
                Please ask the admin to generate secret code
              </Typography>

            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => saveOrUpdatePlayer(e)} >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="http://localhost:3000/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}