import React, { useState, useEffect } from 'react'
import PlayerService from '../services/PlayerService';

import { Grid, makeStyles } from '@material-ui/core';
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


//let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];


function PlayerComponent() {

    const [players, setPlayers] = useState([])

    const [finances, setFinances] = useState([])

    useEffect(() => {
        getPlayers()
    }, [])


    const getPlayers = () => {
        PlayerService.getPlayers().then((response) => {
            setPlayers(response.data)
            setFinances(response.data)
            console.log(response.data);
        });
    };

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
                View Finaces
            </Typography>
            <div></div>
            <TableContainer component={Paper} className={classes.TableContainer}  >
                <Table className={classes.table} sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            {/* <TableCell className={classes.TableHeadCell}>Player</TableCell> */}
                            <TableCell className={classes.TableHeadCell}>First Name</TableCell>
                            <TableCell className={classes.TableHeadCell}>Last Name</TableCell>
                            <TableCell className={classes.TableHeadCell}>Required Amount</TableCell>
                            <TableCell className={classes.TableHeadCell}>Total Amount</TableCell>
                            <TableCell className={classes.TableHeadCell}>Paid Amount</TableCell>
                            <TableCell className={classes.TableHeadCell}>Outstanding Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >

                        {players.map((player) => (
                            <TableRow key={player.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    {player.firstName}
                                </TableCell>
                                <TableCell>
                                    {player.lastName}
                                </TableCell>

                                <TableCell>
                                   R {player.requiredAmount}
                                </TableCell>

                                <TableCell>
                                   R {player.totalAmount}
                                </TableCell>

                                <TableCell>
                                   R {player.paidAmount}
                                </TableCell>

                                <TableCell>
                                   R {player.outstandingAmount}
                                </TableCell>

                                    
                            

                         

                            </TableRow>



                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PlayerComponent