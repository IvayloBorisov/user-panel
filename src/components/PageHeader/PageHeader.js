import { useContext, useState } from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { SelectComponent, Table, SearchComponent } from "../index";
import { AppContext } from "../../context/apiContext";

const formFields = {
  searchValue: "",
  selectedTeam: "",
  selectedLocation: "",
};

const useStyles = makeStyles({
  root: {
    padding: '20px 0 20px 25px',
    spacing: '20px'
  }

});

const PageHeader = () => {  
  const { locations, teams } = useContext(AppContext);
  const [selectedValue, setSelectedValue] = useState(formFields);
  const classes = useStyles();

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value);
    setSelectedValue({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
    <Grid spacing={2} container className={classes.root}>
      <SearchComponent
        name="searchValue"
        value={selectedValue.searchValue}
        onChange={handleChange}
      />
      <SelectComponent
        type="locations"
        data={locations}
        onChange={handleChange}
      />
      <SelectComponent
       type="teams"
       data={teams}
       onChange={handleChange} 
      />
    </Grid>


      <Table selectedValue={selectedValue} />
      </div>
  );
};

export default PageHeader;
