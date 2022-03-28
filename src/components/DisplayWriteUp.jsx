import React, { useContext } from 'react';
import { FormDisplayContext } from '../context/FormDisplayContext';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Width, Alpha, Beta, Gamma) {
  return { Width, Alpha, Beta, Gamma };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {

  const { roofLength, width } = useContext(FormDisplayContext);

  //////////////////////

  let alphaWidth = width
  let betaWidth = width
  let gammaWidth = width

  let alphaRoofLength = roofLength
  let betaRoofLength = roofLength
  let gammaRoofLength = roofLength


  let alphaTiles = Math.floor(alphaRoofLength / 31.5) * Math.floor(alphaWidth / 31.5)
  alphaTiles = alphaTiles - Math.floor(alphaWidth / 31.5)
  let alphaPowerInWatts = alphaTiles * 10
  let alphaTilesInLoop = Math.floor(alphaWidth / 31.5) * 2
  let alphaVoltage = alphaTilesInLoop * 2
  let alphaCurrent = alphaPowerInWatts / alphaVoltage
  let alphaNumOfLoops = Math.floor((alphaRoofLength/ 31.5) / 2)
  let alphaAcount = Math.floor((alphaWidth/ 31.5) * 2);
  let alphaBcount = 0;
  let alphaCcount = Math.floor(2 * alphaWidth / 31.5 - 2) * alphaNumOfLoops;
  /////////////////////

  let betaTiles = 0;
  if (Math.floor(betaWidth / 31.5) % 2 !== 0) {
    betaWidth = betaWidth - 31.5
    betaTiles = Math.floor(roofLength / 31.5) * Math.floor(betaWidth / 31.5)
  } else {
    betaTiles = Math.floor(roofLength / 31.5) * Math.floor(betaWidth / 31.5)
  }

  let betaPowerInWatts = betaTiles * 10
  let betaTilesInLoop = Math.floor(betaWidth / 31.5) * 3
  let betaVoltage = betaTilesInLoop * 2
  let betaCurrent = betaPowerInWatts / betaVoltage
  let betaAcount = (betaWidth + 1) * betaWidth;
  let betaBcount = (betaWidth - 1) * betaWidth;
  let betaCcount = betaWidth * betaWidth;

  /////////////////////

  let gammaTiles = 0;
  if (Math.floor(gammaWidth / 31.5) % 2 !== 0) {
    gammaWidth = gammaWidth - 31.5
    gammaTiles = Math.floor(roofLength / 31.5) * Math.floor(gammaWidth / 31.5)
  } else {
    gammaTiles = Math.floor(roofLength / 31.5) * Math.floor(gammaWidth / 31.5)
  }

  let gammaPowerInWatts = gammaTiles * 10
  let gammaTilesInLoop = Math.floor(gammaWidth / 31.5) * 5
  let gammaVoltage = gammaTilesInLoop * 2
  let gammaCurrent = gammaPowerInWatts / gammaVoltage

  const rows = [
    createData('Tile in one loop', alphaTilesInLoop, betaTilesInLoop, gammaTilesInLoop),
    createData('Voltage', alphaVoltage, betaVoltage, gammaVoltage),
    createData('Area Utilization',),
    createData('Power In Watt', alphaPowerInWatts, betaPowerInWatts, gammaPowerInWatts),
    createData('Current(A)', alphaCurrent, betaCurrent, gammaCurrent),
    createData('Total of tiles created', alphaTiles, betaTiles, gammaTiles),
    createData('Solar A', alphaAcount, betaAcount, gammaPowerInWatts),
    createData('Solar B', alphaBcount, betaBcount, gammaPowerInWatts),
    createData('Solar C', alphaCcount, betaCcount, gammaPowerInWatts),
  ];

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Width</StyledTableCell>
            <StyledTableCell align="right">Alpha</StyledTableCell>
            <StyledTableCell align="right">Beta</StyledTableCell>
            <StyledTableCell align="right">Gamma</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Width}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Alpha}</StyledTableCell>
              <StyledTableCell align="right">{row.Beta}</StyledTableCell>
              <StyledTableCell align="right">{row.Gamma}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
