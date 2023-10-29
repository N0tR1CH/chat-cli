import React from 'react';
import {Box, Text, useFocus} from 'ink';
import {Select} from '@inkjs/ui';
import {useEffect} from 'react';

const Messages = () => {
	const {isFocused} = useFocus();

	useEffect(() => {
    if(isFocused) {
      console.clear();
      console.log('Messages focused');
    }
	}, [isFocused]);

	return (
		<Box height="80%" width="100%" borderStyle="bold" flexDirection="row" padding={1} borderColor={isFocused ? "green" : "white"}>
			<Select
				options={[
					{
						label: '[MariuszBrighton]: Wiadomosc1',
						value: 'test1',
					},
					{
						label: 'test2',
						value: 'test2',
					},
					{
						label: 'test3',
						value: 'test3',
					},
					{
						label: 'test4',
						value: 'test4',
					},
					{
						label: 'test5',
						value: 'test5',
					},
					{
						label: 'test6',
						value: 'test6',
					},
					{
						label: 'test7',
						value: 'test7',
					},
					{
						label: 'test8',
						value: 'test8',
					},
					{
						label: 'test9',
						value: 'test9',
					},
					{
						label: 'test10',
						value: 'test10',
					},
					{
						label: 'test11',
						value: 'test11',
					},
					{
						label: 'test12',
						value: 'test12',
					},
					{
						label: 'test13',
						value: 'test13',
					},
					{
						label: 'test14',
						value: 'test14',
					},
					{
						label: 'test15',
						value: 'test15',
					},
					{
						label: 'test16',
						value: 'test16',
					},
				]}
        isDisabled={!isFocused}
			/>
			<Box marginLeft={1} padding={1} borderStyle="bold" width="100%">
				<Text>
				</Text>
			</Box>
		</Box>
	);
};

export default Messages;
