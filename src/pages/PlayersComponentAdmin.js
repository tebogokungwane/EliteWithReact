import React, { useState, useEffect } from 'react'
import PlayerService from '../services/PlayerService';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Typography
} from '@material-ui/core'



function PlayerComponentAdmin() {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        getPlayers()
    }, [])


    const getPlayers = () => {
        PlayerService.getPlayers().then((response) => {
            setPlayers(response.data)
            console.log(response.data);
        });
    };

    const deletePlayer = (playerId) => {
        PlayerService.deletePlayer(playerId).then((response) => {
            getPlayers();
        }).catch(error => {
            console.log(error);
        })
    }



    const useStyles = makeStyles((theme) => ({
        table: {
            minWidth: 950,
        },
        TableContainer: {
            borderRadius: 15,
            margin: '10px 10px',
            maxWidth: 950,

        },
        TableHeadCell: {
            fontWeight: 'bold',
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.getContrastText(theme.palette.primary.dark)
        },
        avatar: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.getContrastText(theme.palette.primary.light)
        },
        name: {
            fontWeight: 'bold',
            color: theme.palette.secondary.dark
        },
        paper: {
            marginTop: theme.spacing(3),
            width: "100%",
            overflowX: "auto",
            marginBottom: theme.spacing(2),
            margin: "auto",

        },
        status: {
            fontWeight: 'bold',
            fontSize: '0.75rem',
            color: 'white',
            backgroundColor: 'grey',
            borderRadius: 8,
            padding: '3px 10px',
            display: 'inline-block'
        },

    }));

    const classes = useStyles();



    return (

        <div align='center' >

            <Typography component="h1" variant="h5">
                View Players
            </Typography>
            <div></div>
            <TableContainer component={Paper} className={classes.TableContainer}  >
                <Table className={classes.table} sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.TableHeadCell}>Player</TableCell>
                            <TableCell className={classes.TableHeadCell}>First Name</TableCell>
                            <TableCell className={classes.TableHeadCell}>Last Name</TableCell>
                            <TableCell className={classes.TableHeadCell}>Email</TableCell>
                            <TableCell className={classes.TableHeadCell}>Role</TableCell>
                            <TableCell className={classes.TableHeadCell}>Players Satus</TableCell>
                            <TableCell className={classes.TableHeadCell}>Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {players.map((player) => (
                            <TableRow key={player.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='center'>

                                    <Grid item lg={2}>
                                        <Avatar alt={player.firstName} src='.' className={classes.avatar} />
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    {player.firstName}
                                </TableCell>
                                <TableCell>
                                    {player.lastName}
                                </TableCell>
                                <TableCell>
                                    {player.emailId}
                                </TableCell>
                                <TableCell>
                                    {player.role}
                                </TableCell>
                                <TableCell>
                                    <Typography className={classes.status}
                                        style={{
                                            backgroundColor:
                                                ((player.status === 'Active' && 'green') ||
                                                    (player.status === 'Blocked' && 'red') ||
                                                    (player.status === 'Pending' && 'orange')
                                                )
                                        }}>
                                        {player.status}
                                    </Typography>
                                </TableCell>
                                <TableCell>

                                    {/* <EditIcon color="primary" to={'/edit-player/${player.id}'} /> */}
                                    <Button component={Link} to={`/edit-player/${player.id}`} >
                                        Edit...
                                    </Button>
                                    <DeleteIcon color="primary" onClick={() => deletePlayer(player.id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PlayerComponentAdmin