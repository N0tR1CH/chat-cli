import React from 'react';
import {Box, Text, useFocus} from 'ink';

const Messages = () => {
	const {isFocused} = useFocus();

	return (
		<Box
			height="80%"
			width="100%"
			borderStyle="bold"
			flexDirection="row"
			padding={1}
			borderColor={isFocused ? 'green' : 'white'}
		>
			<Box flexDirection='column'>
				<Box flexDirection='row'>
					<Text color="blue">damian: </Text>
					<Text>Zrozumiałe w sumie</Text>
				</Box>
				<Box flexDirection='row'>
					<Text color="red">test: </Text>
					<Text>Ok</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Messages;
