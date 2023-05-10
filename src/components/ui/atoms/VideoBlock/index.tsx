import { Grid, Paper } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const VideoBlock = ({ url, type }: { url: string; type: string }) => {
  if (!url) return null;
  return (
    <Grid container>
      <Paper elevation={8} sx={{ p: 2, width: "100%", mt: 2 }}>
        <CardMedia src={url} />
        <video width="100%" height="100%" autoPlay>
          <source src={url} type={type} />
        </video>
      </Paper>
    </Grid>
  );
};
export default VideoBlock;
