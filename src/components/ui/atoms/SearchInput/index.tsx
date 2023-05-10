"use client";
import Button from "@mui/material/Button";
import { TextField, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import { PostType } from "app/types";

const SearchInput = ({
  selectedItem,
  searchValue,
  onChangeSearch,
  options,
  onSelectItem,
}: {
  selectedItem: any;
  searchValue: string;
  onChangeSearch: (event: any) => void;
  options: any[];
  onSelectItem: (event: any, value: any) => void;
}) => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Autocomplete
          value={selectedItem}
          onChange={onSelectItem}
          options={options}
          getOptionLabel={({ title }: PostType) => title}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ ml: 1, flex: 1 }}
              value={searchValue}
              onChange={onChangeSearch}
              placeholder="Enter Post Title"
            />
          )}
        />
      </Grid>
      <Grid item xs={4} alignSelf="center" sx={{ pl: 2 }}>
        <Button type="button" variant="contained" color="warning">
          SEARCH
        </Button>
      </Grid>
    </Grid>
  );
};
export default SearchInput;
