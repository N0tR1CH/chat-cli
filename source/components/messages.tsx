import React from 'react';
import {Box, Text} from 'ink';

const Messages = () => {
  return (
    <Box height="70%" width="100%" borderStyle="bold">
      <Box height={1} justifyContent='center' width="100%">
        <Text color="cyan">Messages</Text>
      </Box>
    </Box>
  );
};

export default Messages;