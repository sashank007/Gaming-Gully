import React from 'react';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Comic-Con Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen pt-24 md:pt-32 px-4">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>
        
        <div className="z-10 text-center mb-6 md:mb-8">
          {/* Optional heading - currently commented */}
        </div>

        <div className="z-10 max-w-4xl w-full mb-6 md:mb-8 px-2">
          <img 
            src="/images/comic-con.jpeg" 
            alt="Gaming Gully at Comic-Con Hyderabad" 
            className="w-full rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-[#c8ff00] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Comic-Con Info Card */}
        <div className="z-10 max-w-6xl w-full mb-6 md:mb-8 px-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-12 rounded-xl md:rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-[#c8ff00]">📍 FIND US</h3>
                <div className="space-y-3 md:space-y-4 text-lg md:text-xl">
                  <p className="text-white"><span className="font-bold text-[#c8ff00]">Booth:</span> A29</p>
                  <p className="text-white"><span className="font-bold text-[#c8ff00]">Venue:</span> HITEX</p>
                  <p className="text-white"><span className="font-bold text-[#c8ff00]">Location:</span> Maruti Suzuki Arena</p>
                  <p className="text-white"><span className="font-bold text-[#c8ff00]">City:</span> Hyderabad</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-[#c8ff00]">📅 WHEN</h3>
                <div className="space-y-3 md:space-y-4 text-lg md:text-xl">
                  <p className="text-white text-2xl md:text-3xl font-bold">Oct 31 - Nov 2</p>
                  <p className="text-white text-xl md:text-2xl">2025</p>
                  <p className="text-gray-400 mt-4">3 Days of Non-Stop VR Action!</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t-2 border-gray-700">
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-center text-[#c8ff00]">WHAT WE OFFER</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="text-center p-4 md:p-6 bg-black rounded-lg border-2 border-gray-700 hover:border-[#c8ff00] transition-colors">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎮</div>
                  <p className="text-[#c8ff00] font-bold text-lg md:text-xl mb-2 md:mb-3">Comprehensive VR Experience</p>
                  <p className="text-gray-300 text-sm md:text-base">Immerse yourself in cutting-edge virtual reality gaming with the latest technology</p>
                </div>
                <div className="text-center p-4 md:p-6 bg-black rounded-lg border-2 border-gray-700 hover:border-[#c8ff00] transition-colors">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">⭐</div>
                  <p className="text-[#c8ff00] font-bold text-lg md:text-xl mb-2 md:mb-3">Customer First Approach</p>
                  <p className="text-gray-300 text-sm md:text-base">We want you to have the best time - your experience is our priority!</p>
                </div>
                <div className="text-center p-4 md:p-6 bg-black rounded-lg border-2 border-gray-700 hover:border-[#c8ff00] transition-colors">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎁</div>
                  <p className="text-[#c8ff00] font-bold text-lg md:text-xl mb-2 md:mb-3">Merch & Free Giveaways</p>
                  <p className="text-gray-300 text-sm md:text-base">Come to our booth for amazing goodies and exclusive free giveaways!</p>
                </div>
                <div className="text-center p-4 md:p-6 bg-black rounded-lg border-2 border-gray-700 hover:border-[#c8ff00] transition-colors">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">👕</div>
                  <p className="text-[#c8ff00] font-bold text-lg md:text-xl mb-2 md:mb-3">Amazing Offers on Merch</p>
                  <p className="text-gray-300 text-sm md:text-base">Exclusive deals on Hoodies & T-shirts when you come play with us!</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <a 
                href="https://www.district.in/events/hyderabad-comic-con-2025-1-buy-tickets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 md:px-12 py-4 md:py-6 bg-[#c8ff00] text-black font-black text-lg md:text-2xl rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                🎟️ GET YOUR COMIC-CON PASSES
              </a>
            </div>
          </div>
          {/* Step Into The Future */}
          <div className="z-10 w-full max-w-6xl mt-12 md:mt-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-center">
              <span className="text-[#c8ff00]">STEP INTO THE FUTURE</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-white text-center mb-8 md:mb-12 font-bold">PLAY IN VR AT COMIC-CON!</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">⚡</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 md:mb-3 text-[#c8ff00]">2-MIN DEMOS</h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">Quick taste of VR magic</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">⚔️</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 md:mb-3 text-[#c8ff00]">10-MIN BATTLES</h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">Intense VR combat</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 md:border-4 border-[#c8ff00] p-6 md:p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 sm:col-span-2 md:col-span-1">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">🎮</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 md:mb-3 text-[#c8ff00]">15-MIN ADVENTURES</h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">Full VR immersion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Gaming Gully Section */}
      <section id="about" className="py-16 md:py-32 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">About <span className="text-[#c8ff00]">Gaming Gully VR</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
                Gaming Gully VR is India's premier virtual reality gaming destination. We're bringing cutting-edge VR technology to Comic-Con Hyderabad 2025, offering an unparalleled immersive experience.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Visit us at <span className="text-[#c8ff00] font-bold">Booth A29</span> and experience the future of gaming with state-of-the-art VR equipment and curated game selection.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="border border-gray-700 p-4 md:p-6 rounded-lg hover:border-[#c8ff00] transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#c8ff00]">Our Mission</h3>
                <p className="text-gray-300 text-sm md:text-base">To make immersive VR gaming accessible and bring next-gen experiences to India's gaming community.</p>
              </div>
              <div className="border border-gray-700 p-4 md:p-6 rounded-lg hover:border-[#c8ff00] transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#c8ff00]">Why Comic-Con?</h3>
                <p className="text-gray-300 text-sm md:text-base">Meeting gamers, geeks, and pop culture enthusiasts where they gather - bringing VR to the biggest celebration of fandom!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games at Comic-Con Section */}
      <section id="menu" className="py-16 md:py-32 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-center">VR Games at <span className="text-[#c8ff00]">Comic-Con</span></h2>
          <p className="text-center text-lg md:text-xl text-gray-400 mb-8 md:mb-16">Experience these incredible VR titles at our booth!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-lg hover:border-[#c8ff00] transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🧟</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#c8ff00]">Zombie Survival</h3>
              <p className="text-gray-300 text-sm md:text-base">Fight off hordes of undead in intense VR combat. Test your survival skills!</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-lg hover:border-[#c8ff00] transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🚀</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#c8ff00]">Space Adventure</h3>
              <p className="text-gray-300 text-sm md:text-base">Explore the cosmos and uncover secrets of the universe in stunning VR.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-lg hover:border-[#c8ff00] transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">⚔️</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#c8ff00]">Medieval Battle</h3>
              <p className="text-gray-300 text-sm md:text-base">Engage in epic battles with knights and dragons in immersive medieval combat.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-lg hover:border-[#c8ff00] transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🏎️</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#c8ff00]">Racing Simulator</h3>
              <p className="text-gray-300 text-sm md:text-base">Experience high-speed racing with realistic physics and stunning graphics.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-lg hover:border-[#c8ff00] transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎯</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#c8ff00]">Shooter Arena</h3>
              <p className="text-gray-300 text-sm md:text-base">Test your aim in competitive multiplayer VR shooting experiences.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-lg hover:border-[#c8ff00] transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎨</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#c8ff00]">Creative VR</h3>
              <p className="text-gray-300 text-sm md:text-base">Create stunning 3D art and sculptures in a virtual creative space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section - Now moved to hero section */}

      {/* Call to Action Section */}
      <section className="py-16 md:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="text-[#c8ff00]">DON'T MISS OUT!</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white mb-4 md:mb-8 font-bold">See You at Comic-Con Hyderabad 2025</p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12">Visit Booth A29 and experience the future of gaming in virtual reality</p>
          
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <a 
              href="https://www.district.in/events/hyderabad-comic-con-2025-1-buy-tickets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-4 md:py-5 bg-[#c8ff00] text-black font-black text-lg md:text-xl rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              🎟️ BOOK PASSES NOW
            </a>
            <button className="px-8 md:px-10 py-4 md:py-5 bg-transparent border-4 border-white text-white font-black text-lg md:text-xl rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110">
              📧 CONTACT US
            </button>
          </div>

          {/* Instagram Follow Section */}
          <div className="mt-12 md:mt-16 bg-gradient-to-br from-gray-900 to-black border-4 border-[#c8ff00] p-6 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-[#c8ff00]">📱 FOLLOW US ON INSTAGRAM</h3>
                <p className="text-xl md:text-2xl text-white mb-3 md:mb-4 font-bold">Stay Updated!</p>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6">
                  Follow us for exclusive updates on what we're doing next and where we're going!
                </p>
                <ul className="text-sm md:text-base lg:text-lg text-gray-300 space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <li>✨ Behind-the-scenes content</li>
                  <li>🎮 New VR game announcements</li>
                  <li>📍 Upcoming events & locations</li>
                  <li>🎁 Exclusive giveaways & prizes</li>
                </ul>
                <p className="text-[#c8ff00] font-bold text-lg md:text-xl">👉 Scan the QR code to follow us!</p>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/qr_code_insta_design.jpeg" 
                    alt="Follow us on Instagram - QR Code" 
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain"
                  />
                  <p className="text-center text-black font-bold mt-3 md:mt-4 text-base md:text-lg">Scan to Follow!</p>
                </div>
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
            <p className="text-gray-400 mt-2 text-sm md:text-base">Step Into The Future | Play In VR</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8 text-center">
            <div>
              <h4 className="text-[#c8ff00] font-bold mb-2 text-base md:text-lg">Event</h4>
              <p className="text-gray-400 text-sm md:text-base">Comic-Con Hyderabad 2025</p>
              <p className="text-gray-400 text-sm md:text-base">Oct 31 - Nov 2</p>
            </div>
            <div>
              <h4 className="text-[#c8ff00] font-bold mb-2 text-base md:text-lg">Location</h4>
              <p className="text-gray-400 text-sm md:text-base">Booth A29, HITEX</p>
              <p className="text-gray-400 text-sm md:text-base">Maruti Suzuki Arena</p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-[#c8ff00] font-bold mb-2 text-base md:text-lg">Book Passes</h4>
              <a href="https://www.district.in/events/hyderabad-comic-con-2025-1-buy-tickets" target="_blank" rel="noopener noreferrer" className="text-[#c8ff00] hover:text-white text-sm md:text-base">
                district.in
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 pt-6 md:pt-8 border-t border-gray-800">
            <p className="text-sm md:text-base">&copy; 2025 Gaming Gully VR. All rights reserved.</p>
            <p className="mt-2 text-[#c8ff00] font-bold text-base md:text-lg">See You At Comic-Con! 🎮⚡</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
