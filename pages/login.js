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
   
