import { Grid, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const DatePickerComponent = ({selectedDate, handleDateChange}) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
      <Typography>Start Date</Typography>
        <KeyboardDatePicker
          fullWidth
          margin="normal"
          id="date-picker-dialog"
          inputVariant="outlined"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerComponent;
