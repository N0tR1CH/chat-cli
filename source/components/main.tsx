import React from "react";
import { Box } from "ink";
import Sidebar from "./sidebar.js";
import Chat from "./chat.js";

interface MainProps {
  currentUser: string;
  setCurrentUser: any;
}

const Main = ({currentUser, setCurrentUser}: MainProps) => {
  return (
    <Box
      flexDirection="row"
      borderStyle="double"
      borderColor="magenta"
      height={25}
      paddingLeft={1}
    >
      <Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Chat />
    </Box>
  );
}

export default Main;
