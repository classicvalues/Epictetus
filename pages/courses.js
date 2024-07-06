import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Layout from '@components/Layout';
import Container from '@components/Container';
import CardPost from '@components/CardPost';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('There was an error fetching courses!', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Courses &mdash; Epictetus</title>
      </Head>
      <Container>
        <h1 className="text-4xl font-bold text-primary dark:text-accent">Courses</h1>
        <div className="flex -mx-4 flex-wrap mt-6">
          {courses.map((course) => (
            <div key={course.course_id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost title={course.title} description={course.description} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
