import React, { useEffect } from "react";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { Box } from "ink";

const Goodbye = () => {
  useEffect(() => {
    process.exit();
  }, []);

  return (
    <Box
      borderStyle="double"
      borderColor="magenta"
      padding={2}
      height={25}
      justifyContent="center"
      alignItems="center"
    >
      <Gradient name="retro">
        <BigText text="Goodbye!" font="tiny" />
      </Gradient>
    </Box>
  );
}

export default Goodbye;