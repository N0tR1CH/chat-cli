import React from 'react';
import Navbar from './navbar.js';
import {Box} from 'ink';
import Search from './search.js';
import Chats from './chats.js';

interface SidebarProps {
	currentUser: string;
}

const Sidebar = ({currentUser}: SidebarProps) => {
	return (
		<Box flexDirection="column" width="25%">
			<Navbar currentUser={currentUser} />
			<Search currentUser={currentUser} />
			<Chats currentUser={currentUser} />
		</Box>
	);
};

export default Sidebar;
