import { useEffect } from 'react';
import { Moon, Sun, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {theme === 'light' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Theme</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Current: {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={toggleTheme}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Toggle Theme
                </button>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Privacy Notice</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      View our privacy policy and data practices
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/privacy')}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  View Privacy
                </button>
              </div>
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