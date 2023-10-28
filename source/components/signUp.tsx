import React, {useState} from 'react';
import {Box, Text} from 'ink';
import {ConfirmInput, EmailInput, PasswordInput, TextInput} from '@inkjs/ui';

const SignUp = () => {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [activeInput, setActiveInput] = useState('displayName');
	const [reRender, setReRender] = useState(false);

	if (reRender) {
		return null;
	} else {
		return (
			<Box
				flexDirection="column"
				justifyContent="center"
				marginLeft={6}
				gap={1}
			>
				<Text underline>Sign Up</Text>
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
							onConfirm={() => {}}
							onCancel={() => setReRender(!reRender)}
						/>
					</Box>
				)}
			</Box>
		);
	}
};

export default SignUp;
