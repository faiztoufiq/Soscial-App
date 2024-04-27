import React from "react";
import Post from "./Post";
import Post2 from "./Post2";

import { Box } from "@mui/material";
const Feed = () => {
  return (
    <Box flex={4} p={1}>
      <Post />
      <Post2 />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
