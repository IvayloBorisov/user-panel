import { useState, useContext } from "react";
import { Paper, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { TeamsLocationsContext } from "../../context/teamsLocationsContext";
import { ModalContext } from "../../context/modalContext";
import http from '../../services/axios-common';
import {
  SelectComponent,
  DatePickerComponent,
  ButtonComponent
} from "../index";
import { MembersContext } from "../../context/membersContext";

const useStyles = makeStyles(theme => ({
  root: {
    width: "70%",
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '& .MuiGrid-item': {
        marginBottom: '10px'
    }
  },
}));

const initValues = {
  name: "",
  company: "",
  location: "",
  email: "",
  phone: "",
  startDate: new Date(),
};

const FormMember = () => {
  const [values, setValues] = useState(initValues);
  const {membersDispatch, setUpdateMembers, isUpdateMembers} = useContext(MembersContext)
  const {teamsLocationsCtx} = useContext(TeamsLocationsContext);
  const {clickHandler} = useContext(ModalContext);
  const classes = useStyles();

  const btnValues = {
    close: {
      title: "Close",
      backgroundColor: "",
      variant: "outlined",
      textColor: "black",
      type: 'button'
    },
    save: {
      title: "Save",
      backgroundColor: "#2E3ED0",
      variant: "contained",
      textColor: "white",
      type: "submit"
    },
  };

  const onChangeHandler = event => {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  const handleDateChange = (date) => {
    if (date < new Date("2020-01-01")) {
      setValues({
        ...values,
        startDate: new Date()
      });
      return;
    }
    setValues({
      ...values,
      startDate: date
    });
  };

  const submitHandler = event => {
    event.preventDefault();

    console.log(values);
    try {
      http.post('/members', values)
        .then(response => {
          if(response.status !== 200) {
            throw new Error('Something get wrong!');
          }
        });
        setUpdateMembers(!isUpdateMembers);
        clickHandler();
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <Paper >
      <form onSubmit={submitHandler} className={classes.root}>
          <Grid
            container
            style={{
                width: '90%',
                padding: '20px'
            }}
          >
            <Grid
              xs={12}
              style={{ height: 50, borderBottom: "1px solid dimgrey",  }}
            >
              <Typography
                style={{ fontWeight: 700, fontSize: 23, marginLeft: 50 }}
                align="left"
              >
                Add Member
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Name *</Typography>
              <TextField
              // error
                fullWidth
                variant="outlined"
                label="Full Name..."
                name="name"
                onChange={onChangeHandler}
                value={values.name}
                helperText="This field is required"
              />
            </Grid>

            <Grid container justifyContent="space-between">
            <SelectComponent type="company" data={teamsLocationsCtx.teams} onChange={onChangeHandler} size={5} />
            <SelectComponent type="location" data={teamsLocationsCtx.locations} onChange={onChangeHandler} size={5} />
            </Grid>

            <Grid container justifyContent="space-between">
            <Grid item xs={5}>
              <Typography>Email</Typography>
              <TextField
                fullWidth
                type="email"
                variant="outlined"
                label="Contact Email..."
                name="email"
                onChange={onChangeHandler}
                value={values.email}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography>Phone</Typography>
              <TextField
                fullWidth
                variant="outlined"
                label="Phone number..."
                name="phone"
                onChange={onChangeHandler}
                value={values.phone}
              />
            </Grid>

            </Grid>
              <DatePickerComponent selectedDate={values.startDate} handleDateChange={handleDateChange} />
            <Grid
              fullwidth
              container
              justifyContent="flex-end"
              spacing={2}
              style={{ borderTop: "1px solid " }}
            >
              <ButtonComponent onClick={clickHandler} btnValues={btnValues.close} />
              <ButtonComponent btnValues={btnValues.save} />
            </Grid>
          </Grid>
      </form>
    </Paper>
  );
};

export default FormMember;
