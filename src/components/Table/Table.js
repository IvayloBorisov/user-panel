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
import { AppContext } from "../../context/apiContext";
import {normalizeData} from "../../services/normalize";

const useStyles = makeStyles({
  root: {
    borderBottom: "none",
  },
  head: {
    color: "dimgrey",
    fontWeight: 600,
    fontSize: 16,
  },
});

const TableComponent = ({selectedValue}) => {
  const { members, teams, locations } = useContext(AppContext);
  // const [user, setUser] = useState([]);
  const classes = useStyles();

  const normalizeTeams = normalizeData(teams, "_id");
  const normalizeLocations = normalizeData(locations, "_id");

  // console.log(selectedValue)
  const membersList = members?.map((member) => {
    if(selectedValue) {
    }
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
