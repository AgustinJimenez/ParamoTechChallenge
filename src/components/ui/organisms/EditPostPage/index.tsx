import React, { useContext } from "react";
import { Grid, IconButton } from "@mui/material";
import PostForm from "app/components/ui/molecules/PostForm";
import { PostContext } from "app/contexts/PostContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PostType } from "app/types";

const EditPostPage = ({ params }: any) => {
  const { getPostById, updatePostById } = useContext(PostContext);
  const post = getPostById(params?.id);
  const onSubmitForm = (post: PostType) => {
    updatePostById(post);
    location.replace("/posts");
  };

  const goBack = () => {
    location.replace("/posts");
  };

  return (
    <Grid container>
      <Grid container direction="row" item xs={12}>
        <Grid item xs={1}>
          <IconButton onClick={goBack}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item xs={11}>
          <h3>Post Edit</h3>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <PostForm onSubmit={onSubmitForm} post={post} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditPostPage;
