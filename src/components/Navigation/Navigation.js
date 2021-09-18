import { useContext } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ButtonComponent, Popup, FormMember } from "../index";
import { ModalContext } from "../../context/modalContext";

const useStyles = makeStyles({
  root: {
    height: "70px",
  },
});

const NavComponent = () => {
  const {isOpen, clickHandler} = useContext(ModalContext);
  const classes = useStyles();

  const btnValues = {
    delete: {
      title: "Delete",
      backgroundColor: "#C72929",
      variant: "contained",
      textColor: "white",

    },
    add: {
      title: "Add Member",
      backgroundColor: "#2E3ED0",
      variant: "contained",
      textColor: "white",
    },  
  };

  return (
    <>
      <Grid
        className={classes.root}
        justifyContent="flex-end"
        spacing={2}
        container
      >
        <ButtonComponent onClick={clickHandler} btnValues={btnValues.delete} />
        <ButtonComponent onClick={clickHandler} btnValues={btnValues.add} />
      </Grid>
      <Popup
        openPopup={isOpen}
        clickHandler={clickHandler}
      >
        <FormMember />
      </Popup>
    </>
  );
};

export default NavComponent;
