import { Button, Grid, Paper, TextField } from "@mui/material";
import lorem from "app/utils/lorem";
import React from "react";

const AboutPage = () => {
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    setContent(lorem.generateSentences(6));
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <h2> About us</h2>
        <span>{content}</span>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
