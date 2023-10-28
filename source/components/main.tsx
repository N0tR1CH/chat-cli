import React, { useEffect } from "react";
import { Box } from "ink";
import Sidebar from "./sidebar.js";
import Chat from "./chat.js";

const Main = () => {
  useEffect(() => {
    console.log("Please, press tab key to switch between focused elements :)");
  }, []);

  return (
    <Box
      flexDirection="row"
      borderStyle="double"
      borderColor="magenta"
      height={25}
      paddingLeft={1}
    >
      <Sidebar />
      <Chat />
    </Box>
  );
}

export default Main;
