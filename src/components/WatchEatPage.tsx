import { Activity, Target, TrendingUp, Calendar, Apple, BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import WatchEatLogo from './WatchEatLogo';
import { useEffect } from 'react';

export default function WatchEatPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="pt-24" />

      {/* Hero Section */}
      <section className="py-32 pb-40">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mx-auto mb-8 animate-fadeInUp">
              <WatchEatLogo className="h-20 w-20 object-contain" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl animate-fadeInUp animate-delay-200">
              WatchEat
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-400">
              Take control of your health. This app tracks automatically the calories (and protein) you consume and burn, giving you a clear, daily view of your net calorie balance. Stay on track and achieve your goals.
            </p>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-600">
              Seamless and intuitive, feels just like a natural conversation.
            </p>
          </div>
        </div>
      </section>







      {/* How It Works Section */}
      <section className="py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 animate-fadeInUp">How WatchEat Works</h2>
            <p className="mt-4 text-lg text-gray-600 animate-fadeInUp animate-delay-200">
              Simple steps to start tracking your nutrition
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center animate-fadeInUp animate-delay-400">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Log Your Meals</h3>
              <p className="text-gray-600">
                Simply talk about what you eat, and our app will listen and automatically log your meals. It's as easy as having a natural conversation.
              </p>
            </div>

            <div className="text-center animate-fadeInUp animate-delay-600">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Calories</h3>
              <p className="text-gray-600">
                WatchEat automatically calculates your calorie and protein intake and shows you the calories you've consumed and the calories you've burned in real-time, every moment of the day.
              </p>
            </div>

            <div className="text-center animate-fadeInUp animate-delay-800">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitor Progress</h3>
              <p className="text-gray-600">
                Review your daily, weekly, and monthly progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            Join Us for a real time reflection of your calorie balance
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeInUp animate-delay-200">
            Join thousands of users who are already tracking their meals right from their wrist 
            and achieving their health goals with WatchEat.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fadeInUp animate-delay-400">
            <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Download for Apple Watch
            </button>
            <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Download for Wear OS
            </button>
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

      {/* Privacy Notice Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/privacy" 
            className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-md font-medium hover:bg-purple-50 transition-colors animate-fadeInUp"
          >
            Privacy Notice
          </Link>
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