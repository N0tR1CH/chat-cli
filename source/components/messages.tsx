import React from 'react';
import {Box, Text} from 'ink';
import {Select} from '@inkjs/ui';

const Messages = () => {
	return (
		<Box height="80%" width="100%" borderStyle="bold" flexDirection="row" padding={1}>
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
			/>
			<Box padding={1} borderStyle="bold">
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
					voluptatem dicta nemo sint consectetur tenetur aut, quia cupiditate
					cumque ipsum velit quae quod est eum aperiam, commodi obcaecati
					pariatur. Corrupti dolor, itaque at dolore quo molestias consectetur
					quasi veniam aut saepe reiciendis tempore debitis sed quia aliquam
					nisi consequuntur sunt tempora necessitatibus nihil similique iure in
					architecto. Nesciunt libero ab pariatur, necessitatibus velit debitis
					a minus dolore vero sapiente dolores, autem vitae, quam ea accusamus
					delectus. Molestiae quibusdam totam sequi eaque nemo cumque omnis?
					Sapiente nostrum facilis fugiat atque numquam fuga deserunt
					voluptates, nisi fugit quia ducimus eveniet aspernatur odit.
				</Text>
			</Box>
		</Box>
	);
};

export default Messages;
