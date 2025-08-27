import { ArrowRight, Mail, Star } from 'lucide-react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="pt-24" />

      {/* Hero Section */}
      <section id="home" className="relative py-32 pb-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl animate-fadeInUp">
              Lunark Solutions
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
              Harnessing the pinnacle of Generative AI, we deliver innovative solutions that redefine what's possible.
            </p>
            <div className="mt-8 animate-fadeInUp animate-delay-400">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

            {/* Apps Section */}
      <section id="apps" className="relative py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 animate-fadeInUp">Our Product</h2>
            <p className="mt-4 text-lg text-gray-600 animate-fadeInUp animate-delay-200">
              Innovative applications designed to enhance your daily life
            </p>
          </div>
          <div className="mt-16 flex justify-center animate-fadeInUp animate-delay-400">
            <Link 
              to="/watcheat" 
              className="bg-white border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 max-w-md cursor-pointer"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-purple-500 text-white mx-auto">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-2xl font-medium text-gray-900 text-center">WatchEat</h3>
              <p className="mt-4 text-base text-gray-600 text-center">
                Know your real-time calorie balance, every moment of every day.
              </p>
              <div className="mt-6 text-center">
                <span className="inline-flex items-center text-purple-600 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-100/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                At Lunark Solutions, we create cutting-edge AI-based solutions across various fields, with a primary focus on healthcare. By leveraging the latest in deep learning and generative AI, we combine our extensive technical knowledge with a high degree of creativity to solve complex problems and deliver innovative, effective results.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 animate-slideInRight animate-delay-200">
              <div className="relative bg-white/70 backdrop-blur border border-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Team</h3>
                <div className="space-y-3">
                  <p className="text-gray-600">Dr. Nuriel S. Mor</p>
                  <p className="text-gray-600">Or Fishman</p>
                  <p className="text-gray-600">Stenly Buchman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-100/50 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 animate-fadeInUp">Get In Touch</h2>
          </div>
          <div className="mt-16 flex justify-center animate-fadeInUp animate-delay-400">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-600">WatchEat2025@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">Lunark Solutions</h3>
            <p className="mt-2 text-gray-600">
              © 2025 Lunark Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}