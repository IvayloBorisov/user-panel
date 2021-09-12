import {
  TableRow,
  TableCell,
  Checkbox,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        borderBottom: 'none'
    }
});

const TableRowComponent = ({ userInfo }) => {
  const { _id, name, image, organization, status, office, createdAt } = userInfo;
  const classes = useStyles();

  return (
    <TableRow key={_id}>
      <TableCell classes={{root: classes.root}}>
        <Checkbox color="primary" />
      </TableCell>
      <TableCell classes={{root: classes.root}}>
        <CardHeader avatar={<Avatar alt={name} src={image} />} />
      </TableCell>
      <TableCell classes={{root: classes.root}}>{organization}</TableCell>
      <TableCell classes={{root: classes.root}}>{status}</TableCell>
      <TableCell classes={{root: classes.root}}>{createdAt}</TableCell>
      <TableCell classes={{root: classes.root}}>
        <LocationOnOutlined />
        {office}
      </TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
