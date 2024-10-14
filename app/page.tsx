import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-500 text-white p-4">
        <h1>Tailwind is working!</h1>
      </div>
      <HomePage />
      <Footer />
    </>
  );
}
