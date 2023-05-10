import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import Panel from "../../atoms/Panel";
import { PostType } from "app/types";

const DefaultPost: PostType = {
  title: "",
  content: "",
};

const PostForm = ({
  post = DefaultPost,
  onSubmit,
}: {
  post?: PostType;
  onSubmit: (post: PostType) => void;
}) => {
  const [formData, setFormData] = React.useState<PostType>(post);
  const formIsValid =
    formData.title &&
    formData.content &&
    formData.title.length > 3 &&
    formData.content.length > 3;

  const onSubmitForm = () => {
    onSubmit(formData);
  };
  const onChangeForm = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Panel>
      <Grid container>
        <Grid item xs={8} sx={{ p: 1 }}>
          <TextField
            required
            id="title"
            label="Title"
            sx={{ width: "100%" }}
            onChange={(event) => onChangeForm("title", event.target.value)}
            value={formData.title}
          />
        </Grid>
        <Grid item xs={12} sx={{ p: 1 }}>
          <TextField
            required
            id="content"
            label="Content"
            sx={{ width: "100%" }}
            multiline
            maxRows={4}
            onChange={(event) => onChangeForm("content", event.target.value)}
            value={formData.content}
          />
        </Grid>
        <Grid item xs={12} sx={{ p: 1 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={!formIsValid}
            onClick={onSubmitForm}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Panel>
  );
};

export default PostForm;
