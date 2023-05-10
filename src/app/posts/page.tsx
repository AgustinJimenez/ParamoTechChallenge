"use client";
import {
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { PostContext } from "app/contexts/PostContext";
import { PostType } from "app/types";
import { useContext } from "react";
import ViewIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import limitStr from "app/utils/limitStr";

const PostsPage = () => {
  const { posts, deletePost } = useContext(PostContext);
  const onDeletePost = (id?: string) => {
    const shouldDelete = confirm("Are you sure you want to delete the post?");
    if (!shouldDelete || !id) return;
    deletePost(id);
  };
  return (
    <Grid container>
      <Grid container direction="row" item xs={12}>
        <Grid item xs={8}>
          <h3>Posts List</h3>
        </Grid>
        <Grid item xs={4} alignSelf="center">
          <Button
            variant="contained"
            type="button"
            color="success"
            sx={{ float: "right" }}
            href="/posts/create"
          >
            Create Post
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Content</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post: PostType) => (
                <TableRow
                  key={post.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {post.title}
                  </TableCell>
                  <TableCell align="right">{limitStr(post.content)}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup variant="contained">
                      <Button
                        onClick={() => onDeletePost(post.id)}
                        href="#"
                        color="error"
                      >
                        <DeleteIcon />
                      </Button>
                      <Button href={`/posts/${post.id}/edit`}>
                        <EditIcon />
                      </Button>
                      <Button href={`/posts/${post.id}`} color="secondary">
                        <ViewIcon />
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
              {!posts?.length && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="right"
                    colSpan={3}
                    sx={{ textAlign: "center" }}
                  >
                    No posts found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default PostsPage;
