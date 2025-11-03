import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarListings from './components/CarListings';
import InfoSection from './components/InfoSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <CarListings />
        <InfoSection />
      </main>
    </div>
  );
}
