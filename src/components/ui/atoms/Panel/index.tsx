import { Grid, Paper } from "@mui/material";

const Panel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container item>
      <Paper elevation={8} sx={{ p: 3, my: 2, height: "fit-content" }}>
        {children}
      </Paper>
    </Grid>
  );
};
export default Panel;
