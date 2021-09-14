import { Grid, TextField, InputAdornment, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchComponent = ({ name, value, onChange }) => {

  return (
    <Grid item hs={2}>
      <TextField
        variant="outlined"
        name={name}
        onChange={onChange}
        value={value}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                </InputAdornment>
            )
        }}
      />
    </Grid>
  );
};

export default SearchComponent;
