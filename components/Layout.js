import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen text-gray-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
