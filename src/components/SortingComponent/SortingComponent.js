import { useContext } from "react";
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from "@material-ui/icons";
import { Grid, Button } from "@material-ui/core";
import { sortMembers } from "../../context/actions";
import { MembersContext } from "../../context/membersContext";

const SortingComponent = ({ value, type, onClick }) => {
  const { membersDispatch } = useContext(MembersContext);

  const handleClick = (event) => {
    const sortCriteria = event;
    // console.log(sortCriteria);
    membersDispatch(sortMembers(sortCriteria));
  };

  return (
      <Grid item xs={6} style={{ display: "flex", flexDirection: "column" }}>
        <Button onClick={() => onClick(type, value)}>
          {type === 'asc' ? <ArrowDropUpOutlined/> : <ArrowDropDownOutlined /> }
        </Button>
      </Grid>
  );
};

export default SortingComponent;
