import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center'

        }
    },

    headerOptions: {
        display: 'flex',
        flex: 1,
        alignItems: 'center'

        
    }
}));

const Header = props => {

    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
    console.log(isMobile)



    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL) => {
        history.push(pageURL)
        setAnchorEl(null);
    };


    const handleButtonClick = pageURL => {
        history.push(pageURL);

    }


    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>

                <Typography variant="h6" className={classes.title}>
                        ELITE 
                    </Typography>
                 

                    <div>

                        {isMobile ? (
                            <>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                                    <MenuIcon />
                                </IconButton>


                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={() => setAnchorEl(null)}
                                >
                                    <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/service')}>Galary</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/signup')}>Sign up</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/signin')}>Sign in</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('about')}>About</MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Grid container direction="row" alignItems="center">

                            <div className={classes.headerOptions} >
                            <Button color="inherit" onClick={() => handleButtonClick('/')}>Home</Button>
                            <Button color="inherit" onClick={() => handleButtonClick('/service')}>Gallery</Button>
                            <Button color="inherit" onClick={() => handleButtonClick('/signup')}>Sign up</Button>
                            <Button color="inherit" onClick={() => handleButtonClick('/signin')}>Sign in</Button>
                            <Button color="inherit" onClick={() => handleButtonClick('/about')}>About</Button>
                            </div>
                            </Grid>
                        )}
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Header)
