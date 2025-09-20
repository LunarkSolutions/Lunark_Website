import { useEffect } from 'react';
import { Moon, Sun, Shield, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

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
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Choose your preferred theme</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Current theme: {theme === 'light' ? 'Light' : 'Dark'}
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Privacy Policy Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6" />
                Privacy Policy
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-gray-600 dark:text-gray-300">
                <p className="text-lg">
                  WatchEat respects your privacy. This Privacy Notice explains what we collect, how we use it, and your choices when you use the watcheat app.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1) What we collect</h3>
                    <p>
                      Only one thing: the foods you log in the app (the "Food Entries").
                    </p>
                    <p>
                      We do not collect or save your name, email address, phone number, contacts, device identifiers, location, advertising IDs, or analytics. We do not track you across other apps or websites.
                    </p>
                    <p>
                      In short: if you don't type it as a food you ate, we don't save it.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2) How we use your data</h3>
                    <p>
                      We use your Food Entries strictly to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>show your meal history and related features inside the app; and</li>
                      <li>operate and improve core app functionality.</li>
                    </ul>
                    <p>
                      We do not use your Food Entries for advertising, profiling, or resale.
                    </p>
                    <p>
                      Legal basis (if applicable): To provide the service you request (performance of a contract). Where required, we rely on your consent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3) Sharing your data</h3>
                    <p>
                      We do not sell, rent, or share your Food Entries with third parties for their marketing.
                    </p>
                    <p>
                      If we ever must disclose information to comply with a law or valid legal request, we will only disclose what is legally required.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4) Data retention</h3>
                    <p>
                      We keep your Food Entries only as long as needed to provide the watcheat service to you.
                    </p>
                    <p>
                      If you delete an entry (or ask us to delete all your data), we remove it from our active systems promptly and then from backups according to our standard backup rotation schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5) Security</h3>
                    <p>
                      We use reasonable technical and organizational measures to protect Food Entries against unauthorized access, loss, misuse, or alteration. No security practice is perfect, but we work to keep your information safe.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6) Your rights & choices</h3>
                    <p>
                      Depending on your location, you may have rights to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access the Food Entries we store about you</li>
                      <li>Correct inaccurate Food Entries</li>
                      <li>Delete Food Entries (or request deletion of all your data)</li>
                      <li>Export/receive a copy of your Food Entries</li>
                      <li>Withdraw consent where consent applies</li>
                    </ul>
                    <p>
                      To exercise any of these rights, contact us at watcheat2025@gmail.com. We may ask for information necessary to verify your request. We do not discriminate against users for exercising privacy rights.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7) Children's privacy</h3>
                    <p>
                      watcheat is not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect or store information from children. If you believe a child has used the app to submit Food Entries, please contact us and we will delete that data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8) International users</h3>
                    <p>
                      Your Food Entries may be processed in countries other than where you live. Where required, we implement appropriate safeguards for such transfers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9) Changes to this notice</h3>
                    <p>
                      If we make material changes, we will update this page and change the "Effective date" above. If we ever plan to collect anything beyond Food Entries, we will update this notice before the change takes effect.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10) Contact us</h3>
                    <p>
                      If you have questions or requests about this Privacy Notice or your data, email: watcheat2025@gmail.com.
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white mt-4">
                      That's it — watcheat only saves what you tell it you ate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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