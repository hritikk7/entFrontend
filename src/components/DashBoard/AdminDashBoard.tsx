import React from "react";
import { TEAMS } from "../../dummy";
import { Autocomplete, Grid, TextField, Box } from "@mui/material";

const AdminDashBoard = () => {
  console.log(TEAMS);

  return (
    <div>
      <h1>Welcome Admin</h1>
      <h3>Create Match</h3>
      <h6>Choose Teams</h6>
      <Box sx={{ width: "100%", marginLeft: 0 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 4 }} alignItems={'center'}>
          <Grid item xs={4} spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={TEAMS}
              sx={{ width: 300 }}
              renderInput={(item) => <TextField {...item} label="TeamA" />}
            />
          </Grid>
          <Grid item xs={4} spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={TEAMS}
              sx={{ width: 300 }}
              renderInput={(item) => <TextField {...item} label="TeamB" />}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminDashBoard;
