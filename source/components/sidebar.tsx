import React from 'react';
import Navbar from './navbar.js';
import {Box} from 'ink';
import Search from './search.js';
import Chats from './chats.js';

interface SidebarProps {
	currentUser: string;
	setCurrentUser: any;
}

const Sidebar = ({currentUser, setCurrentUser}: SidebarProps) => {
	return (
		<Box flexDirection="column" width="25%">
			<Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
			<Search currentUser={currentUser} />
			<Chats currentUser={currentUser} />
		</Box>
	);
};

export default Sidebar;
