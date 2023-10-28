import React from 'react';
import {Box, Text} from 'ink';
import Messages from './messages.js';

const Chat = () => {
  return (
    <Box borderStyle="bold" width="75%" flexDirection='column'>
      <Box height="15%" width="100%" borderStyle="bold" justifyContent='center' alignItems='center'>
        <Text>Conversation with: </Text>
        <Text bold color="magentaBright">[mariusz_brighton]</Text>
      </Box>
      <Messages />
    </Box>
  );
};

export default Chat;
