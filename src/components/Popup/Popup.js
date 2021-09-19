import { useContext } from "react";
import { Dialog, DialogTitle, DialogContent, Grid, Paper } from "@material-ui/core";
import {HighlightOff} from '@material-ui/icons'
import { ButtonComponent } from "../index";
import { ModalContext } from "../../context/modalContext";
import http from '../../services/axios-common';
import { MembersContext } from "../../context/membersContext";
import {deleteById} from '../../context/actions';
import { makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  '.MuiSvgIcon-root': {

  }
}));

const Popup = ({ title, children, openPopup, clickHandler }) => {
  const { elementName, setEelementName } = useContext(ModalContext);
  const {membersState, membersDispatch} = useContext(MembersContext);
  const classes = useStyles();

  const btnValues = {   
    cancel: {
      title: "Cancel",
      backgroundColor: "white",
      variant: "outlined",
      textColor: "black",
    },
    confirmDelete: {
      title: "Delete",
      backgroundColor: "#C72929",
      variant: "contained",
      textColor: "white",
    },
  };

  const deleteMemberHandler = () => {

    membersState.selectedMembers.forEach(id => {
      http.delete(`/members/${id}`)
        .then(response => {
          if(response.status !== 200) {
            throw new Error('Something get wrong!');
          }
            console.log('Success');
        }).catch(error => {
          console.log(error);
        });

      membersDispatch(deleteById(id));
    });
        clickHandler();
  }

  return (
    <Dialog open={openPopup}>
      {elementName !== "Delete" ? (
        <>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{children}</DialogContent>
        </>
      ) : (
        <Paper style={{padding: '50px'}}>
          <Grid container style={{display: 'flex', flexDirection: 'column'}} justifyContent="center" align="center">
            <Grid item>
            <HighlightOff className={classes.icon} />
            </Grid>
            <Grid item>
            <DialogTitle>{"Are you sure?"}</DialogTitle>
          <DialogContent>{'Do you really want to delete these records? This process cannot be undone.'}</DialogContent>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <ButtonComponent onClick={clickHandler} btnValues={btnValues.cancel} />
            <ButtonComponent onClick={deleteMemberHandler} btnValues={btnValues.confirmDelete} />
          </Grid>
        </Paper>
      )}
    </Dialog>
  );
};

export default Popup;
