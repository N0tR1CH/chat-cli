import React, {useState} from 'react';
import {Box} from 'ink';
import {Select} from '@inkjs/ui';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import items from '../utils/constants.js';
import Goodbye from './goodbye.js';
import SignUp from './signUp.js';

const Home = () => {
	const [itemValue, setItemValue] = useState('');

	if (itemValue === 'exit-app') {
		return <Goodbye />;
	} else {
		return (
			<Box
				flexDirection="row"
				borderStyle="double"
				borderColor="magenta"
				padding={2}
			>
				<Box justifyContent="center" alignItems='center'>
					<Gradient name="retro">
						<BigText text="CHAT-CLI" font="tiny" />
					</Gradient>
				</Box>
				<Box justifyContent="center" alignItems="center" marginLeft={2}>
					<Select
						options={items}
						onChange={newValue => setItemValue(newValue)}
					/>
				</Box>
        {itemValue === 'sign-up' && <SignUp />}
			</Box>
		);
	}
};

export default Home;
