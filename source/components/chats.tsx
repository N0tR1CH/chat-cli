import React, {useEffect, useState} from 'react';
import {Box, useFocus} from 'ink';
import {Select} from '@inkjs/ui';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../utils/firebase.js';

interface ChatsProps {
	currentUser: string;
	setSelectedUser: any;
}

const Chats = ({currentUser, setSelectedUser}: ChatsProps) => {
	const {isFocused} = useFocus();
	const [items, setItems] = useState(Array<any>);

	useEffect(() => {
		setItems([{label: 'Get chats', value: 'getChats'}]);
	}, [isFocused]);

	const fetchUserChats = async () => {
		const docRef = doc(db, 'userChats', currentUser);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			const userInfoArray: {label: string; value: string}[] = [];

			for (const [_, value] of Object.entries(docSnap.data())) {
				if (value['userInfo']['displayName'] !== '') {
					userInfoArray.push({
						label: value['userInfo']['displayName'],
						value: value['userInfo']['displayName'],
					});
				}
			}

			// Push to items only non duplicates (if any)
			setItems(prevItems => {
				const newItems = [...prevItems];
				userInfoArray.forEach(item => {
					if (
						!newItems.some(
							i => i.label === item.label && i.value === item.value,
						)
					) {
						newItems.push(item);
					}
				});
				return newItems;
			});
		}
	};

	const handleGetChats = async (value: string) => {
		if (value === 'getChats') {
			await fetchUserChats();
		} else {
			setSelectedUser(value);
		}
	};

	return (
		<Box
			borderStyle="bold"
			height="70%"
			borderColor={isFocused ? 'green' : 'white'}
		>
			<Select
				options={items}
				isDisabled={!isFocused}
				onChange={handleGetChats}
			/>
		</Box>
	);
};

export default Chats;
