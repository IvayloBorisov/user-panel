import {
  Grid,
  FormControl,
  Select,
  TextField,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { formatStr } from "../../services/normalize";

const SelectComponent = ({ type, data, onChange, size }) => {
  const optionsList = data?.map((item) => (
    <option key={item._id} value={item._id}>
      {item.name}
    </option>
  ));

  return (
    <Grid item xs={size}>
      <Typography>{type} *</Typography>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple">
          {formatStr(type)}
        </InputLabel>
        <TextField
        // error
          // native
          // value={state.age}
          select
          name={type}
          label={type}
          onChange={onChange}
          variant="outlined"
          helperText="This field is required"
          SelectProps={{
            name: type,
            native: true,
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="">
            All
          </option>
          {optionsList}
        </TextField>
      </FormControl>
    </Grid>
  );
};

export default SelectComponent;
