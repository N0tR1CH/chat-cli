import React from 'react';
import Navbar from './navbar.js';
import {Box} from 'ink';
import Search from './search.js';

const Sidebar = () => {
	return (
		<Box flexDirection="column" width="25%">
			<Navbar/>
			<Search/>
		</Box>
	);
};

export default Sidebar;
