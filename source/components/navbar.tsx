import React, {useEffect} from 'react';
import {Box, Text, useFocus} from 'ink';
import {Select} from '@inkjs/ui';

const Navbar = () => {
	const {isFocused} = useFocus();

	useEffect(() => {
    if(isFocused) {
      console.clear();
      console.log('navbar focused');
    }
	}, [isFocused]);

	return (
		<Box
			flexDirection="row"
			borderStyle="bold"
			justifyContent="space-around"
			alignItems="center"
			height="15%"
      borderColor={isFocused ? 'green' : 'white'}
		>
			<Text bold color="green">
				Chat-Cli
			</Text>
			<Text color="cyan">k_stanowski</Text>
			<Select
				options={[
					{
						label: 'logout',
						value: 'logout',
					},
				]}
				isDisabled={!isFocused}
			/>
		</Box>
	);
};

export default Navbar;
