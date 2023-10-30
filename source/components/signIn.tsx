import React, {useState} from 'react';
import {Box, Text} from 'ink';
import {
	ConfirmInput,
	EmailInput,
	PasswordInput,
	Spinner,
	StatusMessage,
} from '@inkjs/ui';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../utils/firebase.js';

interface SignInProps {
  currentUser: any;
  setCurrentUser: any;
}

const SignIn = ({currentUser, setCurrentUser}: SignInProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [activeInput, setActiveInput] = useState('email');
	const [reRender, setReRender] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleLogin = async () => {
		console.log('I am handling login!');

		try {
			setLoading(true);
			await signInWithEmailAndPassword(auth, email, password);
			setLoading(false);
			setSuccess(true);
      setCurrentUser(email);
      console.log(currentUser);
		} catch (err) {
			setError(true);
			setLoading(false);
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
					<BigText text="Sign In" font="tiny" />
				</Gradient>
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
					<Text>Email: "{email}"</Text>
					<Text>Password: "{password.replace(/[^ ]/g, '*')}"</Text>
				</Box>
				{activeInput === 'confirm' && (
					<Box flexDirection="column">
						<Text>Do you want to continue?</Text>
						<ConfirmInput
							isDisabled={activeInput !== 'confirm'}
							onConfirm={() => handleLogin()}
							onCancel={() => setReRender(!reRender)}
						/>
					</Box>
				)}
				{error && (
					<StatusMessage variant="error">
						Failed to login user!
					</StatusMessage>
				)}
				{loading && <Spinner type="dots" label="Signing in user..." />}
			</Box>
		);
	}
};

export default SignIn;
