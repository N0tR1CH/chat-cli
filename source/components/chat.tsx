import React, {useEffect, useState} from 'react';
import {Box, Text} from 'ink';
import Messages from './messages.js';
import Input from './input.js';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../utils/firebase.js';

interface ChatProps {
  selectedUser: string;
  currentUser: string;
}

const Chat = ({selectedUser, currentUser} : ChatProps) => {
  const [_, setCurrentUserDisplayName] = useState('');

  useEffect(() => {
    fetchCurrentUserDisplayName();
  }, []);

  const fetchCurrentUserDisplayName = async () => {
    const docRef = doc(db, 'users', currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setCurrentUserDisplayName(docSnap.data()['displayName']);
    }
  };

  return (
    <Box borderStyle="bold" width="75%" flexDirection='column'>
      <Box height="15%" width="100%" borderStyle="bold" justifyContent='center' alignItems='center'>
        <Text>Conversation with: </Text>
        <Text bold color="magentaBright">[{selectedUser}]</Text>
      </Box>
      <Messages />
      <Input />
    </Box>
  );
};

export default Chat;
