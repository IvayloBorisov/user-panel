import { Grid, FormControl, Select, InputLabel } from "@material-ui/core";
import {formatStr} from '../../services/normalize';

const SelectComponent = ({ type, data, onChange }) => {

  const optionsList = data?.map(item => <option key={item._id} value={item._id} >{item.name}</option>)

  return (
    <Grid item xs={2}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple">{formatStr(type)}</InputLabel>
        <Select
          native
          // value={state.age}
          name={type}
          label={type}
          onChange={onChange}
          inputProps={{
            name: type,
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="">All</option>
          {optionsList}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectComponent;
