import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  formControl: {
    marginButtom: 16,
    minwidth: 128,
    width: "100%",
  },
});

const SelectBox = (props) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{props.label}</InputLabel>
      <Select
        required={props.required}
        value={props.value}
        onChange={(event) => props.select(event.target.value)}
      >
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
