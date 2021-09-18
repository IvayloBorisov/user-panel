import { useContext } from "react";
import { Dialog, DialogTitle, DialogContent, Grid } from "@material-ui/core";
import { ButtonComponent } from "../index";
import { ModalContext } from "../../context/modalContext";
import http from '../../services/axios-common';
import { MembersContext } from "../../context/membersContext";
import {deleteById} from '../../context/actions';

const Popup = ({ title, children, openPopup, clickHandler }) => {
  const { elementName, setEelementName } = useContext(ModalContext);
  const {membersState, membersDispatch} = useContext(MembersContext);

//   console.log(membersContext, membersDispatch)

  const btnValues = {   
    cancel: {
      title: "Cancel",
      backgroundColor: "",
      variant: "contained",
      textColor: "black",
    },
    confirmDelete: {
      title: "Delete",
      backgroundColor: "#C72929",
      variant: "contained",
      textColor: "white",
    },
  };

  console.log(membersState.selectedMembers);
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
        <>
          <DialogTitle>{"Are you sure?"}</DialogTitle>
          <Grid container>
            <ButtonComponent onClick={clickHandler} btnValues={btnValues.cancel} />
            <ButtonComponent onClick={deleteMemberHandler} btnValues={btnValues.confirmDelete} />
          </Grid>
        </>
      )}
    </Dialog>
  );
};

export default Popup;
