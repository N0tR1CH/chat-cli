import React, {useState} from 'react';
import {Box} from 'ink';
import {Select} from '@inkjs/ui';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import items from '../utils/constants.js';
import Goodbye from './goodbye.js';
import SignUp from './signUp.js';
import SignIn from './signIn.js';
import open from 'open';
import Main from './main.js';

const Home = () => {
	const [itemValue, setItemValue] = useState('');
	const [currentUser, setCurrentUser] = useState('none');

	if (itemValue === 'about-app') {
		open('https://github.com/N0tR1CH');
	}

	if (itemValue === 'exit-app') {
		return <Goodbye />;
	} else if (currentUser !== 'none') {
		return <Main currentUser={currentUser}/>
	} else {
		return (
			<Box
				flexDirection="row"
				borderStyle="double"
				borderColor="magenta"
				padding={2}
				height={25}
			>
				<Box justifyContent="center" alignItems="center">
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
				{itemValue === 'sign-in' && <SignIn currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
			</Box>
		);
	}
};

export default Home;
