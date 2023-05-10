"use client";
import React, { useContext } from "react";
import { Button, Grid, IconButton, Paper } from "@mui/material";
import PostForm from "app/components/ui/molecules/PostForm";
import { PostContext } from "app/contexts/PostContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PostType } from "app/types";
import HtmlRenderer from "app/components/ui/atoms/HtmlRenderer";

const EditPostPage = ({ params }: any) => {
  const { getPostById } = useContext(PostContext);
  const post = getPostById(params?.id);

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
        <Grid item xs={11} sx={{ textAlign: "center" }}>
          <h2>{post?.title}</h2>

          <HtmlRenderer htmlString={String(post?.content)} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditPostPage;
