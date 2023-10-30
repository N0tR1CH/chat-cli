import React, {useEffect, useState} from 'react';
import {TextInput} from '@inkjs/ui';
import {Box, useFocus} from 'ink';
import {db} from '../utils/firebase.js';
import {collection, query, where, getDocs, getDoc} from 'firebase/firestore';
import {doc, setDoc, updateDoc, serverTimestamp} from 'firebase/firestore';

interface SearchProps {
	currentUser: string;
}

const Search = ({currentUser}: SearchProps) => {
	const {isFocused} = useFocus();
	const [searchedUserEmail, setSearchedUserEmail] = useState('');
  const [searchedUserDisplayName, setSearchedUserDisplayName] = useState('');
  const [currentUserDisplayName, setCurrentUserDisplayName] = useState('');

	useEffect(() => {
		if (isFocused) {
			console.clear();
			console.log('search focused');
		}
	}, [isFocused]);

	const handleTextInput = async (value: string) => {
		const q = await query(
			collection(db, 'users'),
			where('displayName', '==', value),
		);

		const querySnapshot = await getDocs(q);

		if (querySnapshot.empty) {
			console.log('No such document!');
		}

		querySnapshot.forEach(doc => {
			setSearchedUserEmail(doc.data()['email']);
      setSearchedUserDisplayName(doc.data()['displayName']);
		});

    const q2 = await query(
      collection(db, 'users'),
      where('email', '==', currentUser),
    );

    const querySnapshot2 = await getDocs(q2);

    if (querySnapshot2.empty) {
      console.log('No such document!');
    }

    querySnapshot2.forEach(doc => {
      setCurrentUserDisplayName(doc.data()['displayName']);
    });

    const combinedNames = currentUserDisplayName + searchedUserDisplayName;

		if (searchedUserEmail !== '') {
			try {
        const res = await getDoc(doc(db, "chats", combinedNames));

        if (!res.exists()) {
          await setDoc(doc(db, "chats", combinedNames), { messages: [] });

          await updateDoc(doc(db, "userChats", currentUser), {
            [combinedNames + ".userInfo"]: {
              email: searchedUserEmail,
              displayName: searchedUserDisplayName,
            },
            [combinedNames + ".date"]: serverTimestamp(),
          });

          await updateDoc(doc(db, "userChats", searchedUserEmail), {
            [combinedNames + ".userInfo"]: {
              email: currentUser,
              displayName: currentUserDisplayName,
            },
            [combinedNames + ".date"]: serverTimestamp(),
          });
        }
			} catch (err) {
				console.log(err);
			}
		}

		console.log(currentUser);
		console.log(searchedUserEmail);
	};

	return (
		<Box
			borderStyle="bold"
			flexDirection="column"
			height="15%"
			borderColor={isFocused ? 'green' : 'white'}
		>
			<TextInput
				placeholder="Search..."
				isDisabled={!isFocused}
				onSubmit={handleTextInput}
			/>
		</Box>
	);
};

export default Search;
