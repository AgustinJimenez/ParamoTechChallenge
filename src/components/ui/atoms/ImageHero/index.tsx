import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import lorem from "app/utils/lorem";

const IMAGE_URL = "https://picsum.photos/1200/800";

const ImageHero = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  React.useEffect(() => {
    setTitle(lorem.generateSentences(1));
    setContent(lorem.generateSentences(4));
  }, []);
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${IMAGE_URL})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={IMAGE_URL} alt="hero image" />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container justifyContent="flex-end">
        <Grid item md={6}>
          <Box
            sx={{
              paddingTop: { md: 40, xs: 3 },
              paddingX: { md: 6, xs: 3 },
              paddingBottom: { md: 2, xs: 3 },
              pr: { md: 0 },
              position: "relative",
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              data-testid="title-label"
            >
              {title}
            </Typography>

            <Typography variant="body2" color="inherit">
              {content}
            </Typography>
            <Link variant="subtitle2" href="/posts">
              Read More
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ImageHero;
