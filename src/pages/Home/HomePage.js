import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { NavComponent, PageHeader } from "../../components";
import { ModalProvider } from "../../context/modalContext";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eceff1",
    padding: "50px 50px 0 50px",
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ModalProvider>
        <NavComponent />
      </ModalProvider>
      <PageHeader />
    </Paper>
  );
};

export default HomePage;
