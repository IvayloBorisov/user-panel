import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ButtonComponent } from "../index";

const useStyles = makeStyles({
  root: {
    height: "70px",
  },
});

const NavComponent = () => {
  const classes = useStyles();
  const btnColors = {
    delete: "#C72929",
    add: "#2E3ED0",
  };

  return (
    <Grid
      className={classes.root}
      justifyContent="flex-end"
      spacing={2}
      container
    >
      <ButtonComponent color={btnColors.delete} title="Delete" />
      <ButtonComponent color={btnColors.add} title="Add Member" />
    </Grid>
  );
};

export default NavComponent;
