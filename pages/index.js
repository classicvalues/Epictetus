import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FeaturedPost from '@components/FeaturedPost';
import CardPost from '@components/CardPost';
import Container from '@components/Container';
import Layout from '@components/Layout';
import mockPosts from '../utils/posts.json';

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-6xl font-bold">Welcome to Epictetus!</h1>
          <div className="mt-6">
            <Link href="/register">
              <a className="px-4 py-2 bg-blue-500 text-white rounded">Register</a>
            </Link>
          </div>
        </div>
        <FeaturedPost />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map(post => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
