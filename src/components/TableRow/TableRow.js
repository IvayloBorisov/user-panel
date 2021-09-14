import {
  TableRow,
  TableCell,
  Checkbox,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import formatDate from "../../services/dateFormat";
import {formatStr} from '../../services/normalize'; 

const useStyles = makeStyles({
    root: {
        borderBottom: 'none'
    }
});

const TableRowComponent = ({ memberInfo }) => {
  const { _id, name, image, teamName, status, locationName, createdAt } = memberInfo;
  const classes = useStyles();

  return (
    <TableRow key={_id}>
      <TableCell classes={{root: classes.root}}>
        <Checkbox color="primary" />
      </TableCell>
      <TableCell classes={{root: classes.root}}>
        <CardHeader avatar={<Avatar alt={name} src={image} />} />
      </TableCell>
      <TableCell classes={{root: classes.root}}>{teamName}</TableCell>
      <TableCell classes={{root: classes.root}}>{formatStr(status)}</TableCell>
      <TableCell classes={{root: classes.root}}>{formatDate(createdAt)}</TableCell>
      <TableCell classes={{root: classes.root}}>
        <LocationOnOutlined />
        {locationName}
      </TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
