import React, {useEffect} from 'react';
import {Box, useFocus} from 'ink';
import { Select } from '@inkjs/ui';

interface ChatsProps {
  currentUser: string;
}

const Chats = ({currentUser} : ChatsProps) => {
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
            label: currentUser,
            value: 'test',
          },
          {
            label: 'user2',
            value: 'test2',
          },
          {
            label: 'user3',
            value: 'test3',
          },
        ]}
        isDisabled={!isFocused}
      />
    </Box>
  );
}

export default Chats;
