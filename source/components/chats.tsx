import React, {useEffect} from 'react';
import {Box, useFocus} from 'ink';
import { Select } from '@inkjs/ui';

const Chats = () => {
	const {isFocused} = useFocus();

	useEffect(() => {
    if(isFocused) {
      console.clear();
      console.log('chats focused');
    }
	}, [isFocused]);

  return (
		<Box
			borderStyle="bold"
      height="70%"
      borderColor={isFocused ? 'green' : 'white'}
		>
      <Select
        options={[
          {
            label: 'mariusz_brighton',
            value: 'test',
          },
          {
            label: 'kopyto_borka',
            value: 'test2',
          },
          {
            label: 'najman',
            value: 'test3',
          },
        ]}
        isDisabled={!isFocused}
      />
    </Box>
  );
}

export default Chats;
