import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const ButtonComponent = ({ title, color }) => {
  const useStyles = makeStyles({
    root: {
      textTransform: "none",
      padding: "6px 40px 6px 40px",
      backgroundColor: `${color}`,
      color: "white",
    },
  });

  const classes = useStyles();

  const handleClick = () => {};

  return (
    <Grid item>
      <Button
        onClick={handleClick}
        className={classes.root}
        variant="contained"
      >
        {title}
      </Button>
    </Grid>
  );
};

export default ButtonComponent;
