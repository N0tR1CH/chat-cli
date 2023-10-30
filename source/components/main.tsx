import React, { useEffect } from "react";
import { Box } from "ink";
import Sidebar from "./sidebar.js";
import Chat from "./chat.js";

interface MainProps {
  currentUser: string;
}

const Main = ({currentUser}: MainProps) => {
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
      <Sidebar currentUser={currentUser}/>
      <Chat />
    </Box>
  );
}

export default Main;
