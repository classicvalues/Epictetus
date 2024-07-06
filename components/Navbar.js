import Link from 'next/link';
import { useState } from 'react';
import Container from '@components/Container';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text: 'Internet', href: '/posts' },
    { text: 'Books', href: '/posts' },
    { text: 'Open Source', href: '/posts' },
  ];

  return (
    <nav className="py-6 bg-primary text-white">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => setOffcanvas(!offcanvas)} className="lg:hidden">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/">
              <a className="flex items-center ml-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">E</div>
                <span className="ml-2 text-xl font-bold">Epictetus</span>
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-8">
            <Link href="/courses"><a className="hover:underline">Courses</a></Link>
            <Link href="/about"><a className="hover:underline">About Us</a></Link>
            <Link href="/contact"><a className="hover:underline">Contact</a></Link>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setSearch(!search)}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
