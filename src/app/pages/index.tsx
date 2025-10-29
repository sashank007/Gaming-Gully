import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="bg-primary text-secondary min-h-screen">
      <Navbar />
      <section id="home" className="flex flex-col items-center justify-center min-h-screen">
        <img src="/gaming_gully_vr.webp" alt="Gaming Gully Logo" className="w-32 h-32 mb-8" />
        <h1 className="text-4xl font-bold mb-4">Welcome to g Gaming Gully</h1>
        <p className="text-lg">Experience the ultimate in VR gaming in India.</p>
      </section>
      <section id="vision" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
        <p className="max-w-2xl mx-auto">To bring immersive VR gaming experiences to players in India, making cutting-edge technology accessible and fun for everyone.</p>
      </section>
      <section id="games" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Games We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Zombie Survival</h3>
            <p>Fight off hordes of zombies in an intense VR experience.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Space Adventure</h3>
            <p>Explore the cosmos and uncover the secrets of the universe.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Medieval Battle</h3>
            <p>Engage in epic battles with knights and dragons.</p>
          </div>
        </div>
      </section>
      <section id="locations" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
        <p>We have locations in Mumbai, Delhi, Bangalore, and Hyderabad.</p>
      </section>
    </div>
  );
}

export default Home;
