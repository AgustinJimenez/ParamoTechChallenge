"use client";

import { Button, Grid, TextField } from "@mui/material";
import Panel from "app/components/ui/atoms/Panel";

const ContactPage = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <h2> Contact us</h2>
        <span>
          Need to get in touch with us? fill out the form with your inquiry
        </span>
      </Grid>
      <Grid item xs={6}>
        <Panel>
          <Grid container>
            <Grid item xs={6} sx={{ p: 1 }}>
              <TextField required id="first_name" label="First Name" />
            </Grid>
            <Grid item xs={6} sx={{ p: 1 }}>
              <TextField required id="last_name" label="Last Name" />
            </Grid>
            <Grid item xs={12} sx={{ p: 1 }}>
              <TextField
                required
                id="email"
                label="Email"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ p: 1 }}>
              <TextField
                required
                id="request"
                label="What can we help you with?"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ p: 1 }}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Panel>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
