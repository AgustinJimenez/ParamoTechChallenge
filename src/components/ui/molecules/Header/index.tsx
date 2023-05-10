import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import SearchInput from "app/components/ui/atoms/SearchInput";
import PageHeaderLogo from "app/components/ui/atoms/PageHeaderLogo";
import PageHeaderLinks from "app/components/ui/atoms/PageHeaderLinks";
import React, { useContext, useState } from "react";
import { PostContext } from "app/contexts/PostContext";
import { PostType } from "app/types";

const Header = () => {
  const { posts } = useContext(PostContext);
  const [selectedPost, setSelectedPost] = useState<PostType | undefined>();
  const [searchValue, setSearchVal] = React.useState("");
  const onChangeSearch = (event: any) => {
    setSearchVal(event.target.value);
  };
  const onSelectPost = (_event: any, post: any) => {
    const url = `/posts/${post.id}`;
    window.location.href = url;
  };

  return (
    <Toolbar>
      <Grid container style={{ alignItems: "flex-end" }}>
        <Grid item sm={1}>
          <PageHeaderLogo />
        </Grid>
        <Grid container item sm={7} direction="row">
          <PageHeaderLinks />
        </Grid>
        <Grid item sm={4}>
          <SearchInput
            selectedItem={selectedPost}
            searchValue={searchValue}
            onChangeSearch={onChangeSearch}
            onSelectItem={onSelectPost}
            options={searchValue ? posts : []}
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Header;
