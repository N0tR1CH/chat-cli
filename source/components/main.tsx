import React, {useState} from 'react';
import {Box} from 'ink';
import Sidebar from './sidebar.js';
import Chat from './chat.js';

interface MainProps {
	currentUser: string;
	setCurrentUser: any;
}

const Main = ({currentUser, setCurrentUser}: MainProps) => {
	const [selectedUser, setSelectedUser] = useState('');

	return (
		<Box
			flexDirection="row"
			borderStyle="double"
			borderColor="magenta"
			height={25}
			paddingLeft={1}
		>
			<Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser} setSelectedUser={setSelectedUser} />
			<Chat selectedUser={selectedUser} currentUser={currentUser} />
		</Box>
	);
};

export default Main;
