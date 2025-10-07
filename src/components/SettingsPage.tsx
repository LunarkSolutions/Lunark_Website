import { useEffect } from 'react';
import { useState } from 'react';
import { Moon, Sun, Shield, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [themeExpanded, setThemeExpanded] = useState(false);
  const [privacyExpanded, setPrivacyExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <div className="pt-24" />

      {/* Settings Content */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Settings</h1>
            
            {/* Theme Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-colors">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {theme === 'light' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                Theme
              </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-100/50 dark:via-gray-800/30 dark:to-gray-700/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Us</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We create cutting-edge AI-based solutions across various fields, with a primary focus on healthcare. By leveraging the latest in deep learning and generative AI, we combine our extensive technical knowledge with a high degree of creativity to solve complex problems and deliver innovative, effective results.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 animate-slideInRight animate-delay-200">
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-600 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Team</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300">Dr. Nuriel S. Mor</p>
                  <p className="text-gray-600 dark:text-gray-300">Or Fishman</p>
                  <p className="text-gray-600 dark:text-gray-300">Stenly Buchman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-100/50 dark:from-gray-800/50 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white animate-fadeInUp">Get In Touch</h2>
          </div>
          <div className="mt-16 flex justify-center animate-fadeInUp animate-delay-400">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Email</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">WatchEat2025@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">WatchEat</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              © 2025 WatchEat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}