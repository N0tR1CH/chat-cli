import React from 'react';
import Navbar from './navbar.js';
import {Box} from 'ink';
import Search from './search.js';
import Chats from './chats.js';

const Sidebar = () => {
	return (
		<Box flexDirection="column" width="25%">
			<Navbar/>
			<Search/>
      <Chats/>
		</Box>
	);
};

export default Sidebar;
