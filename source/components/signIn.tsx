import React, {useState} from 'react';
import {Box, Text} from 'ink';
import {ConfirmInput, EmailInput, PasswordInput } from '@inkjs/ui';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [activeInput, setActiveInput] = useState('email');
	const [reRender, setReRender] = useState(false);

  const handleLogin = () => {
    console.log("I am handling login!");
  }

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
                <Gradient name="retro">
                    <BigText text="Sign Up" font="tiny" />
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
			</Box>
		);
	}
};

export default SignIn;