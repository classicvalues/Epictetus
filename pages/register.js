import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Layout from '@components/Layout';
import Container from '@components/Container';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password,
        role,
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Register &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl font-bold text-primary dark:text-accent">Register</h1>
          <form className="mt-8 w-full max-w-md" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 px-4 py-2 border rounded w-full"
            />
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
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mb-4 px-4 py-2 border rounded w-full"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">
              Register
            </button>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
