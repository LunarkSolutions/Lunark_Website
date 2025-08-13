import { ArrowRight, Mail, Phone, MapPin, Star } from 'lucide-react';
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
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Welcome to Lunark Solutions
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We provide innovative solutions to help your business grow and succeed in today's competitive market.
            </p>
            <div className="mt-8">
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
            <h2 className="text-3xl font-bold text-gray-900">Our Apps</h2>
            <p className="mt-4 text-lg text-gray-600">
              Innovative applications designed to enhance your daily life
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <Link 
              to="/watcheat" 
              className="bg-white border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 max-w-md cursor-pointer"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-purple-500 text-white mx-auto">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-2xl font-medium text-gray-900 text-center">WatchEat</h3>
              <p className="mt-4 text-base text-gray-600 text-center">
                Your ultimate companion for tracking meals and maintaining a healthy lifestyle. 
                Monitor your eating habits with ease and precision.
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900">About Lunark Solutions</h2>
              <p className="mt-4 text-lg text-gray-600">
                With years of experience in delivering exceptional business solutions, we are committed to helping 
                organizations achieve their goals through innovative approaches and dedicated service.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our team of experts works closely with clients to understand their unique challenges and 
                develop customized strategies that drive real results.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="relative bg-white/70 backdrop-blur border border-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Proven track record of success
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Dedicated professional team
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Customized solutions for every client
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Ongoing support and maintenance
                  </li>
                </ul>
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
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to take your business to the next level? Contact us today.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-600">contact@lunarksolutions.com</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Address</h3>
              <p className="mt-2 text-base text-gray-600">123 Business Ave<br />Suite 100<br />City, State 12345</p>
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