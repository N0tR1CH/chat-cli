import React, {useEffect} from 'react';
import {Select, TextInput} from '@inkjs/ui';
import {Box, useFocus} from 'ink';

const Search = () => {
	const {isFocused} = useFocus();

	useEffect(() => {
    if(isFocused) {
      console.clear();
      console.log('search focused');
    }
	}, [isFocused]);

  return (
    <Box borderStyle="bold" flexDirection='column' height="15%">
      <TextInput
        placeholder="Search..."
        isDisabled={!isFocused}
      />
      <Select
        options={[
          {
            label: 'mariusz_brighton',
            value: 'test',
          },
        ]}
        isDisabled={!isFocused}
      />
    </Box>
  );
}

export default Search;
