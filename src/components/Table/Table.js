import { useContext, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
} from "@material-ui/core";
import { TableRowComponent } from "../index";
import { MembersContext } from "../../context/membersContext";
import {TeamsLocationsContext} from '../../context/teamsLocationsContext'
import {normalizeData} from "../../services/normalize";

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
    // console.log(member)
    if (member.team) {
      member.locationName = normalizeLocations[member.office].name;
      member.teamName = normalizeTeams[member.team].name;
    }

    return <TableRowComponent key={member._id} memberInfo={member} />;
  });

  return (
    <TableContainer>
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
            </TableCell>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              STATUS / LABEL
            </TableCell>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              CREATED AT
            </TableCell>
            <TableCell classes={{ head: classes.head, root: classes.root }}>
              LOCATION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{membersList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
