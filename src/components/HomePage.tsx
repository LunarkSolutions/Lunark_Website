import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Lunark Solutions
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#apps" className="text-gray-600 hover:text-gray-900 transition-colors">Apps</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Apps</h2>
            <p className="mt-4 text-lg text-gray-600">
              Innovative applications designed to enhance your daily life
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <Link 
              to="/watcheat" 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 max-w-md cursor-pointer"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white mx-auto">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-2xl font-medium text-gray-900 text-center">WatchEat</h3>
              <p className="mt-4 text-base text-gray-500 text-center">
                Your ultimate companion for tracking meals and maintaining a healthy lifestyle. 
                Monitor your eating habits with ease and precision.
              </p>
              <div className="mt-6 text-center">
                <span className="inline-flex items-center text-blue-600 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                    Proven track record of success
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                    Dedicated professional team
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                    Customized solutions for every client
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to take your business to the next level? Contact us today.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-500">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">contact@lunarksolutions.com</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Address</h3>
              <p className="mt-2 text-base text-gray-500">123 Business Ave<br />Suite 100<br />City, State 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white">Lunark Solutions</h3>
            <p className="mt-2 text-gray-400">
              © 2025 Lunark Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}