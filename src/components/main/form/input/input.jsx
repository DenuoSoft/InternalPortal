//import css from './input.module.scss';
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "../../../../data/data";
//import {Data} from "../form-data"
//import { Questions } from '../../../../hooks/form-provider';

export const Input = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ width: 350 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label="Partner"
            variant="filled"
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
              },
            }}
          />
        )}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label="Fee earner"
            variant="filled"
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
              },
            }}
          />
        )}
      />
    </Stack>
  );
};
