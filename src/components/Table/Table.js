import { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Grid
} from "@material-ui/core";
import { TableRowComponent } from "../index";
import { MembersContext } from "../../context/membersContext";
import {TeamsLocationsContext} from '../../context/teamsLocationsContext'
import {normalizeData} from "../../services/normalize";
import {SortingComponent} from '../index';
import { selectMember } from "../../context/actions";

const useStyles = makeStyles({
  root: {
    borderBottom: "none",
    backgroundColor: "white"
  },
  head: {
    color: "dimgrey",
    fontWeight: 600,
    fontSize: 16,
  },
});

const TableComponent = () => {
  const {membersState} = useContext(MembersContext);
  const {teamsLocationsCtx} = useContext(TeamsLocationsContext);
  const classes = useStyles();

  const normalizeTeams = normalizeData(teamsLocationsCtx.teams, "_id");
  const normalizeLocations = normalizeData(teamsLocationsCtx.locations, "_id");

  const membersList = membersState.members?.map((member) => {
    if (member.team && normalizeLocations && normalizeTeams) {
      member.locationName = normalizeLocations[member.office].name;
      member.teamName = normalizeTeams[member.team].name;
    }

    return <TableRowComponent key={member._id} memberInfo={member} />;
  });


  const tableClickHandler = (sortingCriteria, selectedColumn) => {
     membersList.sort((a, b) => {
       if(sortingCriteria === 'asc') {
        //  console.log(selectedColumn)
        return a.props.memberInfo[selectedColumn] - b.props.memberInfo[selectedColumn]
       }

       return b.props.memberInfo.selectedColumn - a.props.memberInfo.selectedColumn
     });
  }

  return (
    <TableContainer onClick={tableClickHandler}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              <Checkbox indeterminate color="primary" />
            </TableCell>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              MEMBER
            </TableCell>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              TEAM
              <Grid container>
               <SortingComponent value='teamName' type='asc' onClick={tableClickHandler} />
               <SortingComponent value='teamName' type='desc' onClick={tableClickHandler}/>
              </Grid>
            </TableCell>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              STATUS / LABEL
            </TableCell>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              CREATED AT
              <SortingComponent value='createdAt' />
            </TableCell>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              LOCATION
              <SortingComponent value='office' />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{membersList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
