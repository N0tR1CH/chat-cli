import React from 'react';
import Navbar from './navbar.js';
import {Box} from 'ink';
import Search from './search.js';
import Chats from './chats.js';

interface SidebarProps {
	currentUser: string;
	setCurrentUser: any;
	setSelectedUser: any;
}

const Sidebar = ({currentUser, setCurrentUser, setSelectedUser}: SidebarProps) => {
	return (
		<Box flexDirection="column" width="25%">
			<Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
			<Search currentUser={currentUser} />
			<Chats currentUser={currentUser} setSelectedUser={setSelectedUser} />
		</Box>
	);
};

export default Sidebar;
