'use client';
import React, { useState } from 'react';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, name }),
        });

        const data = await response.json();

        if (response.ok) {
          setSubscribed(true);
          setEmail('');
          setName('');
        } else {
          alert(data.error || 'Failed to subscribe. Please try again.');
        }
      } catch (error) {
        console.error('Subscription error:', error);
        alert('Failed to subscribe. Please try again.');
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen pt-24 md:pt-32 px-4">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>

        <div className="z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight">
            <span className="text-[#c8ff00]">IMMERSIVE VR</span>
            <br />
            <span className="text-white">EXPERIENCES</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            India's premier virtual reality company bringing cutting-edge VR experiences to events, exhibitions, and soon - our very own location.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12">
            Step into another world. Play with friends. Create unforgettable memories.
          </p>

          {/* Coming Soon Teaser */}
          <div className="mb-8 md:mb-12 inline-block">
            <div className="px-6 py-3 bg-gradient-to-r from-[#c8ff00]/20 to-transparent border border-[#c8ff00] rounded-full animate-pulse">
              <span className="text-[#c8ff00] font-bold">NEW LOCATION COMING SOON</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#experiences"
              className="px-8 md:px-12 py-4 md:py-5 bg-[#c8ff00] text-black font-black text-lg md:text-xl rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              EXPLORE EXPERIENCES
            </a>
            <a
              href="#subscribe"
              className="px-8 md:px-12 py-4 md:py-5 bg-transparent border-3 border-[#c8ff00] text-[#c8ff00] font-bold text-lg md:text-xl rounded-lg hover:bg-[#c8ff00] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              GET UPDATES
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#c8ff00] rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#c8ff00] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            What is <span className="text-[#c8ff00]">Gaming Gully VR?</span>
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto">
            We bring premium virtual reality experiences to events, exhibitions, and venues across India - with our own dedicated location coming soon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 hover:border-[#c8ff00] p-8 rounded-xl text-center transition-all duration-300">
              <div className="text-5xl md:text-6xl mb-4">🎮</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#c8ff00]">Event-Based VR</h3>
              <p className="text-gray-300">
                We set up immersive VR stations at events, conventions, and exhibitions. No permanent location needed - we bring the experience to you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 hover:border-[#c8ff00] p-8 rounded-xl text-center transition-all duration-300">
              <div className="text-5xl md:text-6xl mb-4">🤝</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#c8ff00]">Multiplayer Adventures</h3>
              <p className="text-gray-300">
                Experience VR with friends and family. Our setups support group experiences where you can play together in virtual worlds.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 hover:border-[#c8ff00] p-8 rounded-xl text-center transition-all duration-300">
              <div className="text-5xl md:text-6xl mb-4">⭐</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#c8ff00]">Premium Equipment</h3>
              <p className="text-gray-300">
                We use state-of-the-art VR headsets and equipment to deliver the highest quality immersive experiences possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VR Experiences Section */}
      <section id="experiences" className="py-16 md:py-24 px-4 md:px-8 bg-black scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Our <span className="text-[#c8ff00]">VR Experiences</span>
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto">
            From quick demos to full immersive adventures, we have experiences for everyone.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-4">⚡</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 text-[#c8ff00]">Quick Demos</h3>
              <p className="text-gray-400 text-sm mb-3">2-5 minutes</p>
              <p className="text-gray-300">Perfect for first-timers. Get a taste of VR with short, exciting experiences that showcase the technology.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-4">⚔️</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 text-[#c8ff00]">Action Games</h3>
              <p className="text-gray-400 text-sm mb-3">10-15 minutes</p>
              <p className="text-gray-300">Intense combat, zombie survival, and shooter experiences. Test your skills in heart-pumping VR action.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-4">🌍</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 text-[#c8ff00]">Adventure Experiences</h3>
              <p className="text-gray-400 text-sm mb-3">15-30 minutes</p>
              <p className="text-gray-300">Full immersive adventures. Explore alien worlds, solve puzzles, and embark on epic journeys with friends.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-4">🏎️</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 text-[#c8ff00]">Racing & Simulation</h3>
              <p className="text-gray-400 text-sm mb-3">10-20 minutes</p>
              <p className="text-gray-300">Feel the speed with realistic racing simulators and flight experiences that put you in the driver's seat.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-4">👥</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 text-[#c8ff00]">Team Experiences</h3>
              <p className="text-gray-400 text-sm mb-3">15-30 minutes</p>
              <p className="text-gray-300">Multiplayer cooperative games where you work together with friends to complete missions and defeat enemies.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-4">🎨</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 text-[#c8ff00]">Creative & Casual</h3>
              <p className="text-gray-400 text-sm mb-3">Variable</p>
              <p className="text-gray-300">Relaxing creative experiences, virtual art studios, and family-friendly games suitable for all ages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
            Why <span className="text-[#c8ff00]">Gaming Gully VR?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-4">
              <div className="text-3xl md:text-4xl text-[#c8ff00]">01</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">We Come To You</h3>
                <p className="text-gray-400">We set up at events, malls, corporate venues, and exhibitions across India. Plus, our own location coming soon!</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl md:text-4xl text-[#c8ff00]">02</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Expert Guidance</h3>
                <p className="text-gray-400">Our trained staff ensures everyone has a great experience, whether you're a VR veteran or trying it for the first time.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl md:text-4xl text-[#c8ff00]">03</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Curated Game Library</h3>
                <p className="text-gray-400">We carefully select the best VR games and experiences to ensure maximum fun and immersion for all audiences.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl md:text-4xl text-[#c8ff00]">04</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Hygiene First</h3>
                <p className="text-gray-400">All equipment is thoroughly sanitized between sessions. Your safety and comfort are our top priorities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Location Teaser */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-[#c8ff00] p-8 md:p-16 rounded-2xl overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c8ff00]/5 via-transparent to-[#c8ff00]/5 animate-pulse"></div>

            <div className="relative z-10 text-center">
              <div className="inline-block px-4 py-2 bg-[#c8ff00] text-black font-bold text-sm rounded-full mb-6">
                COMING SOON
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
                <span className="text-white">OUR NEWEST</span>
                <br />
                <span className="text-[#c8ff00]">LOCATION</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                We're building something special. A dedicated space for the ultimate VR experience - where you can walk in anytime and step into another world.
              </p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">🎮</div>
                  <p className="text-gray-400 text-sm">Premium VR Stations</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">👥</div>
                  <p className="text-gray-400 text-sm">Group Experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">🎉</div>
                  <p className="text-gray-400 text-sm">Party Bookings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">🏆</div>
                  <p className="text-gray-400 text-sm">Tournaments</p>
                </div>
              </div>

              <p className="text-[#c8ff00] font-bold text-lg md:text-xl mb-6">
                Be the first to know when we launch!
              </p>

              <a
                href="#subscribe"
                className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#c8ff00] text-black font-black text-lg md:text-xl rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                GET NOTIFIED
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section id="past-events" className="py-16 md:py-24 px-4 md:px-8 bg-black scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="text-[#c8ff00]">Past Events</span>
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto">
            Check out where we've been and the experiences we've delivered.
          </p>

          {/* Comic Con Event Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-gray-700 rounded-2xl overflow-hidden hover:border-[#c8ff00] transition-all duration-300">
              <img
                src="/images/comic-con.jpeg"
                alt="Gaming Gully at Comic-Con Hyderabad 2025"
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#c8ff00] text-black text-sm font-bold rounded-full">COMIC-CON</span>
                  <span className="px-3 py-1 bg-gray-700 text-white text-sm font-bold rounded-full">HYDERABAD</span>
                  <span className="px-3 py-1 bg-gray-700 text-white text-sm font-bold rounded-full">2025</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Comic-Con Hyderabad 2025</h3>
                <p className="text-gray-400 mb-4">
                  We brought immersive VR experiences to Comic-Con Hyderabad at HITEX. Visitors experienced quick demos, intense VR battles, and full adventure sessions at our booth.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-[#c8ff00] font-bold text-lg">Oct 31 - Nov 2</p>
                    <p className="text-gray-500 text-sm">Dates</p>
                  </div>
                  <div>
                    <p className="text-[#c8ff00] font-bold text-lg">HITEX</p>
                    <p className="text-gray-500 text-sm">Venue</p>
                  </div>
                  <div>
                    <p className="text-[#c8ff00] font-bold text-lg">3 Days</p>
                    <p className="text-gray-500 text-sm">Duration</p>
                  </div>
                </div>

                {/* Social Proof Stats */}
                <div className="bg-black/50 border-2 border-[#c8ff00] rounded-xl p-6 mt-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-4xl md:text-5xl font-black text-[#c8ff00]">500+</p>
                      <p className="text-gray-300 text-sm md:text-base mt-1">People Played VR</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl md:text-5xl font-black text-[#c8ff00]">90%</p>
                      <p className="text-gray-300 text-sm md:text-base mt-1">Satisfaction Rate</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-4">*Based on feedback collected at the event</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-12">
            More events coming soon! Subscribe below to be the first to know.
          </p>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="text-[#c8ff00]">Gallery</span>
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Glimpses from our events and exclusive Gaming Gully merchandise.
          </p>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="relative">
          <div className="flex animate-scroll gap-6">
            {/* First set of images */}
            {[
              { src: '/images/001.jpg', alt: 'Gaming Gully Event 1' },
              { src: '/images/002.jpg', alt: 'Gaming Gully Event 2' },
              { src: '/images/004.jpg', alt: 'Gaming Gully Event 3' },
              { src: '/images/005.jpg', alt: 'Gaming Gully Event 4' },
              { src: '/images/006.jpg', alt: 'Gaming Gully Event 5' },
              { src: '/images/Coffee Cup.jpg', alt: 'Gaming Gully Coffee Cup' },
              { src: '/images/GG-Coffee Holder.jpg', alt: 'Gaming Gully Coffee Holder' },
              { src: '/images/GG-Coffee Mug.jpg', alt: 'Gaming Gully Coffee Mug' },
              { src: '/images/GG-Hoodie-01.jpg', alt: 'Gaming Gully Hoodie' },
              { src: '/images/GG-Hoodie-02.jpg', alt: 'Gaming Gully Hoodie' },
              { src: '/images/GG-Hoodie-03.jpg', alt: 'Gaming Gully Hoodie' },
              { src: '/images/GG-Hoodie-04.jpg', alt: 'Gaming Gully Hoodie' },
              { src: '/images/GG-Wristband Mockup02.jpg', alt: 'Gaming Gully Wristband' },
            ].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-[#c8ff00] transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { src: '/images/001.jpg', alt: 'Gaming Gully Event 1' },
              { src: '/images/002.jpg', alt: 'Gaming Gully Event 2' },
              { src: '/images/004.jpg', alt: 'Gaming Gully Event 3' },
              { src: '/images/005.jpg', alt: 'Gaming Gully Event 4' },
              { src: '/images/006.jpg', alt: 'Gaming Gully Event 5' },
              { src: '/images/Coffee Cup.jpg', alt: 'Gaming Gully Coffee Cup' },
              { src: '/images/GG-Coffee Holder.jpg', alt: 'Gaming Gully Coffee Holder' },
              { src: '/images/GG-Coffee Mug.jpg', alt: 'Gaming Gully Coffee Mug' },
              { src: '/images/GG-Hoodie-01.jpg', alt: 'Gaming Gully Hoodie' },
              { src: '/images/GG-Hoodie-02.jpg', alt: 'Gaming Gully Hoodie' },
              { src: '/images/GG-Hoodie-03.jpg', alt: 'Gaming Gully Hoodie' },
              { src: '/images/GG-Hoodie-04.jpg', alt: 'Gaming Gully Hoodie' },
              { src: '/images/GG-Wristband Mockup02.jpg', alt: 'Gaming Gully Wristband' },
            ].map((image, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-[#c8ff00] transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#c8ff00]">Stay Updated</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Be the first to know when our new location launches, upcoming events, new VR experiences, and exclusive offers. Subscribe to our newsletter!
          </p>

          {subscribed ? (
            <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-[#c8ff00] p-8 md:p-12 rounded-2xl">
              <div className="text-5xl md:text-6xl mb-4">✓</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#c8ff00] mb-4">You're Subscribed!</h3>
              <p className="text-gray-300 text-lg">
                Thanks for subscribing! We'll keep you updated on all our upcoming events and experiences.
              </p>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-[#c8ff00] p-8 md:p-12 rounded-2xl">
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="px-6 py-4 bg-black border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#c8ff00] focus:outline-none transition-colors"
                  />
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 bg-black border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#c8ff00] focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-[#c8ff00] text-black font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">What you'll get:</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="px-4 py-2 bg-[#c8ff00]/20 border border-[#c8ff00] rounded-full text-[#c8ff00]">New Location Launch</span>
                  <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">Upcoming Event Alerts</span>
                  <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">New VR Experiences</span>
                  <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">Exclusive Offers</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-[#c8ff00] p-6 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-[#c8ff00]">
                  Follow Us on Instagram
                </h3>
                <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
                  Stay connected for behind-the-scenes content, event updates, and exclusive giveaways!
                </p>
                <ul className="text-sm md:text-base text-gray-300 space-y-2 mb-4 md:mb-6">
                  <li>Behind-the-scenes content</li>
                  <li>New VR game announcements</li>
                  <li>Upcoming events & locations</li>
                  <li>Exclusive giveaways & prizes</li>
                </ul>
                <a
                  href="https://www.instagram.com/gaminggully.vr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#c8ff00] text-black font-bold rounded-lg hover:bg-white transition-all duration-300"
                >
                  @gaminggully.vr
                </a>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/gaminggully.vr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src="/images/qr_code_insta_design.jpeg"
                    alt="Follow us on Instagram - QR Code"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                  />
                  <p className="text-center text-black font-bold mt-3 md:mt-4 text-sm md:text-base">Scan to Follow!</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-[#c8ff00] py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <img src="/images/gaming_gully_logo.jpg" alt="Gaming Gully Logo" className="h-12 md:h-16 mx-auto mb-3 md:mb-4" />
            <p className="text-xl md:text-2xl font-bold text-[#c8ff00]">GAMING GULLY VR</p>
            <p className="text-gray-400 mt-2 text-sm md:text-base">India's Premier Event-Based VR Company</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8 text-center">
            <div>
              <h4 className="text-[#c8ff00] font-bold mb-2 text-base md:text-lg">What We Do</h4>
              <p className="text-gray-400 text-sm md:text-base">Immersive VR Experiences</p>
              <p className="text-gray-400 text-sm md:text-base">Event-Based Gaming</p>
            </div>
            <div>
              <h4 className="text-[#c8ff00] font-bold mb-2 text-base md:text-lg">Contact Us</h4>
              <a href="mailto:gaminggullyvr@gmail.com" className="text-gray-400 hover:text-[#c8ff00] text-sm md:text-base block mb-1">
                gaminggullyvr@gmail.com
              </a>
              <a href="https://instagram.com/gaminggully.vr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c8ff00] text-sm md:text-base block">
                @gaminggully.vr
              </a>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-[#c8ff00] font-bold mb-2 text-base md:text-lg">For Business Inquiries</h4>
              <p className="text-gray-400 text-sm md:text-base">Want us at your event?</p>
              <a href="mailto:gaminggullyvr@gmail.com" className="text-[#c8ff00] hover:text-white text-sm md:text-base">
                Get in touch
              </a>
            </div>
          </div>

          <div className="text-center text-gray-400 pt-6 md:pt-8 border-t border-gray-800">
            <p className="text-sm md:text-base">&copy; 2025 Gaming Gully VR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
