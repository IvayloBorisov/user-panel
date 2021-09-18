import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const ButtonComponent = ({btnValues, onClick}) => {

  const {variant,title, backgroundColor, textColor, name, type} = btnValues;

  const useStyles = makeStyles({
    root: {
      textTransform: "none",
      padding: "6px 40px 6px 40px",
      backgroundColor: `${backgroundColor}`,
      color: `${textColor}`,
    },
  });

  const classes = useStyles();

  return (
    <Grid item>
      <Button
        name={name}
        onClick={onClick}
        className={classes.root}
        variant={variant}
        type={type}
      >
        {title}
      </Button>
    </Grid>
  );
};

export default ButtonComponent;
