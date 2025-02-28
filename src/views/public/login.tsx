'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/store/CommonApi';

import styled from "styled-components";

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


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const [login] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = login({ email, password });
            const { token } = (await response).data?.responseObject;

            console.log("TOKEN -> : ", token)

            localStorage.setItem('token', token);
            router.push('/dashboard');
        } catch (error) {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </Form>
        </div>
    );
};

export default Login;
