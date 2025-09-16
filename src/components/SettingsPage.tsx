import { useEffect, useState } from 'react';
import { Moon, Sun, Mail, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function SettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isConnected, setIsConnected] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }

    // Load account connection status
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setIsConnected(true);
      setUserEmail(savedEmail);
    }
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const handleGmailConnect = () => {
    // Simulate Gmail connection (in a real app, you'd use Google OAuth)
    const email = prompt('Enter your Gmail address:');
    if (email && email.includes('@gmail.com')) {
      setIsConnected(true);
      setUserEmail(email);
      localStorage.setItem('userEmail', email);
      alert('Successfully connected to Gmail!');
    } else if (email) {
      alert('Please enter a valid Gmail address.');
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setUserEmail('');
    localStorage.removeItem('userEmail');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <Navbar />
      <div className="pt-24" />

      {/* Settings Header */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
            <Link 
              to="/" 
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'hover:bg-gray-800 text-gray-300 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-4xl font-bold">Settings</h1>
          </div>

          <div className="space-y-8">
            {/* Theme Settings */}
            <div className={`p-6 rounded-lg border transition-colors animate-fadeInUp animate-delay-200 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                {theme === 'dark' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                Theme
              </h2>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Choose your preferred theme for the WatchEat interface.
              </p>
              
              <div className="flex gap-4">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-colors ${
                    theme === 'light'
                      ? 'bg-purple-600 text-white border-purple-600'
                      : theme === 'dark'
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Sun className="h-4 w-4" />
                  Light
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-colors ${
                    theme === 'dark'
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Moon className="h-4 w-4" />
                  Dark
                </button>
              </div>
            </div>

            {/* Account Connection */}
            <div className={`p-6 rounded-lg border transition-colors animate-fadeInUp animate-delay-400 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Mail className="h-6 w-6" />
                Account Connection
              </h2>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Connect your Gmail account to sync your WatchEat data and receive notifications.
              </p>

              {isConnected ? (
                <div className="space-y-4">
                  <div className={`flex items-center gap-3 p-4 rounded-md ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <User className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Connected Account</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {userEmail}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleDisconnect}
                    className={`px-4 py-2 rounded-md border transition-colors ${
                      theme === 'dark'
                        ? 'border-red-600 text-red-400 hover:bg-red-600 hover:text-white'
                        : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    Disconnect Account
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleGmailConnect}
                  className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Connect Gmail Account
                </button>
              )}
            </div>

            {/* Additional Settings Placeholder */}
            <div className={`p-6 rounded-lg border transition-colors animate-fadeInUp animate-delay-600 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <h2 className="text-2xl font-semibold mb-4">More Settings</h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Additional settings and preferences will be available in future updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`transition-colors ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold">WatchEat</h3>
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 WatchEat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}