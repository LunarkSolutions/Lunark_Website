import { useEffect } from 'react';
import { useState } from 'react';
import { Moon, Sun, Shield, ChevronDown, ChevronRight } from 'lucide-react';
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
  )
}
  )
}