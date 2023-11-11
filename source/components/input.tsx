import { TextInput } from '@inkjs/ui';
import React, { useState} from 'react';
import { Box, useFocus } from 'ink';

const Input = () => {
  const [_, setValue] = useState('');
	const {isFocused} = useFocus();

  return (
    <Box marginLeft={1}>
      <TextInput placeholder="Type a message..." onChange={setValue} isDisabled={!isFocused}/>
    </Box>
  );
};

export default Input;
