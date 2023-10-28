import React from "react";
import { Box } from "ink";
import Sidebar from "./sidebar.js";

const Main = () => {
  return (
    <Box
      flexDirection="row"
      borderStyle="double"
      borderColor="magenta"
      height={25}
      paddingLeft={1}
    >
      <Sidebar />
    </Box>
  );
}

export default Main;
