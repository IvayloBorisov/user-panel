import { useState, useEffect } from "react";
import http from "../../services/axios-common";
import {makeStyles, hexToRgb} from '@material-ui/styles';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
} from "@material-ui/core";
import { TableRowComponent } from "../index";

const useStyles = makeStyles({
    root: {
        borderBottom: 'none'
    },
    head: {
        color: 'dimgrey',
        fontWeight: 600,
        fontSize: 16
    }
});

const TableComponent = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, status } = await http.get("/members");
        if (status !== 200) {
          throw new Error("Sorry something get wrong!");
        }
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const usersList = users.map((user) => (
    <TableRowComponent key={user._id} userInfo={user} />
  ));

  return (
    <TableContainer>
      <Table>
        <TableHead >
          <TableRow >
            <TableCell classes={{head: classes.head, root: classes.root}}>
              <Checkbox indeterminate color='primary' />
            </TableCell>
            <TableCell classes={{head: classes.head, root: classes.root}}>MEMBER</TableCell>
            <TableCell classes={{head: classes.head, root: classes.root}}>TEAM</TableCell>
            <TableCell classes={{head: classes.head, root: classes.root}}>STATUS / LABEL</TableCell>
            <TableCell classes={{head: classes.head, root: classes.root}}>CREATED AT</TableCell>
            <TableCell classes={{head: classes.head, root: classes.root}}>LOCATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{usersList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
