import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Layout from '@components/Layout';
import Container from '@components/Container';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Login &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl font-bold text-primary dark:text-accent">Login</h1>
          <form className="mt-8 w-full max-w-md" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 px-4 py-2 border rounded w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 px-4 py-2 border rounded w-full"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">
              Login
            </button>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
