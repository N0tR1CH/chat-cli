import React, {useState} from 'react';
import {Box, Text} from 'ink';
import {ConfirmInput, EmailInput, PasswordInput, Spinner, StatusMessage, TextInput} from '@inkjs/ui';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import {auth, db} from '../utils/firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';

const SignUp = () => {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [activeInput, setActiveInput] = useState('displayName');
	const [reRender, setReRender] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleRegistration = async () => {
		try {
			setLoading(true);
			await createUserWithEmailAndPassword(auth, email, password);

			await setDoc(doc(db, 'users', email), {
				displayName,
				email,
			});

			await setDoc(doc(db, 'userChats', email), {});

			setLoading(false);
			setSuccess(true);
		} catch (err) {
			setError(true);
		}
	};

	if (reRender || success) {
		return null;
	} else {
		return (
			<Box
				flexDirection="column"
				justifyContent="center"
				marginLeft={6}
				gap={1}
			>
				<Gradient name="retro">
					<BigText text="Sign Up" font="tiny" />
				</Gradient>
				<Box flexDirection="column">
					<TextInput
						isDisabled={activeInput !== 'displayName'}
						placeholder="Enter your display name..."
						onChange={setDisplayName}
						onSubmit={() => setActiveInput('email')}
					/>
				</Box>
				<Box flexDirection="column">
					<EmailInput
						isDisabled={activeInput !== 'email'}
						placeholder="Enter your email..."
						onChange={setEmail}
						onSubmit={() => setActiveInput('password')}
					/>
				</Box>
				<Box flexDirection="column">
					<PasswordInput
						isDisabled={activeInput !== 'password'}
						placeholder="Enter your password..."
						onChange={setPassword}
						onSubmit={() => setActiveInput('confirm')}
					/>
				</Box>
				<Box flexDirection="column">
					<Text>Display name: "{displayName}"</Text>
					<Text>Email: "{email}"</Text>
					<Text>Password: "{password.replace(/[^ ]/g, '*')}"</Text>
				</Box>
				{activeInput === 'confirm' && (
					<Box flexDirection="column">
						<Text>Do you want to continue?</Text>
						<ConfirmInput
							isDisabled={activeInput !== 'confirm'}
							onConfirm={() => handleRegistration()}
							onCancel={() => setReRender(!reRender)}
						/>
					</Box>
				)}
				{error && (
					<StatusMessage variant="error">
						Failed to register user!
					</StatusMessage>
				)}
				{loading && (
					<Spinner type="dots" label='Registering user...' />
				)}
			</Box>
		);
	}
};

export default SignUp;
