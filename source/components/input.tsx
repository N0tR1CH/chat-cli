import { TextInput } from '@inkjs/ui';
import React, { useState, useEffect } from 'react';
import { Box, useFocus } from 'ink';

const Input = () => {
  const [_, setValue] = useState('');
	const {isFocused} = useFocus();

	useEffect(() => {
    if(isFocused) {
      console.clear();
      console.log('chats focused');
    }
	}, [isFocused]);

  return (
    <Box marginLeft={1}>
      <TextInput placeholder="Type a message..." onChange={setValue} isDisabled={!isFocused}/>
    </Box>
  );
};

export default Input;
