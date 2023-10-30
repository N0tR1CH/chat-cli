import React, {useEffect, useState} from 'react';
import {Box, Text, useFocus} from 'ink';
import {Select} from '@inkjs/ui';
import {db} from '../utils/firebase.js';
import {collection, query, where, getDocs} from 'firebase/firestore';

interface NavbarProps {
	currentUser: string;
}

const Navbar = ({currentUser}: NavbarProps) => {
	const {isFocused} = useFocus();
	const [currentUserDisplayName, setCurrentUserDisplayName] = useState('');

	useEffect(() => {
		if (isFocused) {
			console.clear();
			console.log('navbar focused');
		}
	}, [isFocused]);

	useEffect(() => {
		const getUser = async () => {
			const q = await query(
				collection(db, 'users'),
				where('email', '==', currentUser),
			);

			const querySnapshot = await getDocs(q);

			if (querySnapshot.empty) {
				console.log('No such document!');
			}

			querySnapshot.forEach(doc => {
				setCurrentUserDisplayName(doc.data()['displayName']);
			});
		};

		getUser();
	}, []);

	return (
		<Box
			flexDirection="row"
			borderStyle="bold"
			justifyContent="space-around"
			alignItems="center"
			height="15%"
			borderColor={isFocused ? 'green' : 'white'}
		>
			<Text bold color="green">
				Chat-Cli
			</Text>
			<Text color="cyan">{currentUserDisplayName}</Text>
			<Select
				options={[
					{
						label: 'logout',
						value: 'logout',
					},
				]}
				isDisabled={!isFocused}
			/>
		</Box>
	);
};

export default Navbar;
