import React, { useEffect } from "react";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";

const Goodbye = () => {
  useEffect(() => {
    process.exit();
  }, []);

  return (
    <Gradient name="retro">
      <BigText text="Goodbye!" font="tiny" />
    </Gradient>
  );
}

export default Goodbye;