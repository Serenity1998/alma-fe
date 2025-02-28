'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/store/CommonApi';

import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 30px;
`;

const Input = styled.input`
  max-width: 100%;
  width: 420px;
`;

const ErrorMessage = styled.span`
  max-width: 100%;
  width: 530px;
  color: red;
  font-size: 12px;
  margin-block: 20px;
`;

const Spacer = styled.div`
  height: 40px;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await login({ username, password }).unwrap();
            console.log(response)
            if (response?.token) {
                const { token } = response;
                localStorage.setItem('token', token);
                router.push('/dashboard');
            } else {
                setErrorMessage('Failed to login. Please try again.');
            }
        } catch (error) {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div>
            <Spacer />
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={isLoading}>Login</button>
                {isLoading && <div>Loading...</div>}
                <ErrorMessage>
                    {errorMessage && <div>{errorMessage}</div>}
                </ErrorMessage>
            </Form>
        </div>
    );
};

export default Login;
