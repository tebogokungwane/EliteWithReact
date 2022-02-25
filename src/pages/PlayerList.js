// import React, {useState, useEffect} from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import PlayerService from '../services/PlayerService';

//  function PlayerList() {

//     const[players, setPlayers] = useState([])

//     useEffect(() => {
//         getPlayers()
//     }, [])

//     const getPlayers = () => {
//         PlayerService.getPlayers().then((response) => {
//             setPlayers(response.data)
//             console.log(response.data);
//         });
//     };


//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">id</TableCell>
//             <TableCell align="right">firstName&nbsp;(g)</TableCell>
//             <TableCell align="right">lastName&nbsp;(g)</TableCell>
//             <TableCell align="right">emailId&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {players.map(player => 

//             <TableRow
//               key={player.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {player.name}
//               </TableCell>
//               <TableCell align="right">{player.calories}</TableCell>
//               <TableCell align="right">{player.fat}</TableCell>
//               <TableCell align="right">{player.carbs}</TableCell>
//               <TableCell align="right">{player.protein}</TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default PlayerList
