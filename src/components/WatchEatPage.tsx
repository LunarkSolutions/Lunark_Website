import { useEffect } from 'react';
import { Activity, Mail } from 'lucide-react';
import Navbar from './Navbar';

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
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-500 text-white mx-auto mb-8 animate-fadeInUp">
              <Activity className="h-10 w-10" />
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
            Take control of your nutrition—track meals straight from your wrist and achieve your health goals with WatchEat.
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
                We create cutting-edge AI-based solutions across various fields, with a primary focus on healthcare. By leveraging the latest in deep learning and generative AI, we combine our extensive technical knowledge with a high degree of creativity to solve complex problems and deliver innovative, effective results.
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

      {/* CTA to Privacy Section (in-page scroll) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="#privacy"
            className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-md font-medium hover:bg-purple-50 transition-colors animate-fadeInUp"
          >
            Privacy Notice
          </a>
        </div>
      </section>

      {/* Privacy Section (merged) */}
      <section id="privacy" className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Privacy Notice for WatchEat
            </h1>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
              <p className="text-lg">
                WatchEat respects your privacy. This Privacy Notice explains what we collect, how we use it, and your choices when you use the watcheat app.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">1) What we collect</h2>
                  <p>Only one thing: the foods you log in the app (the "Food Entries").</p>
                  <p>
                    We do not collect or save your name, email address, phone number, contacts, device identifiers, location, advertising IDs, or analytics. We do not track you across other apps or websites.
                  </p>
                  <p>In short: if you don't type it as a food you ate, we don't save it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">2) How we use your data</h2>
                  <p>We use your Food Entries strictly to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>show your meal history and related features inside the app; and</li>
                    <li>operate and improve core app functionality.</li>
                  </ul>
                  <p>We do not use your Food Entries for advertising, profiling, or resale.</p>
                  <p>
                    Legal basis (if applicable): To provide the service you request (performance of a contract). Where required, we rely on your consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">3) Sharing your data</h2>
                  <p>We do not sell, rent, or share your Food Entries with third parties for their marketing.</p>
                  <p>
                    If we ever must disclose information to comply with a law or valid legal request, we will only disclose what is legally required.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">4) Data retention</h2>
                  <p>We keep your Food Entries only as long as needed to provide the watcheat service to you.</p>
                  <p>
                    If you delete an entry (or ask us to delete all your data), we remove it from our active systems promptly and then from backups according to our standard backup rotation schedule.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">5) Security</h2>
                  <p>
                    We use reasonable technical and organizational measures to protect Food Entries against unauthorized access, loss, misuse, or alteration. No security practice is perfect, but we work to keep your information safe.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">6) Your rights &amp; choices</h2>
                  <p>Depending on your location, you may have rights to:</p>
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
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">7) Children's privacy</h2>
                  <p>
                    watcheat is not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect or store information from children. If you believe a child has used the app to submit Food Entries, please contact us and we will delete that data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">8) International users</h2>
                  <p>
                    Your Food Entries may be processed in countries other than where you live. Where required, we implement appropriate safeguards for such transfers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">9) Changes to this notice</h2>
                  <p>
                    If we make material changes, we will update this page and change the "Effective date" above. If we ever plan to collect anything beyond Food Entries, we will update this notice before the change takes effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">10) Contact us</h2>
                  <p>
                    If you have questions or requests about this Privacy Notice or your data, email: watcheat2025@gmail.com.
                  </p>
                  <p className="font-medium text-gray-900 mt-4">
                    That's it — watcheat only saves what you tell it you ate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">WatchEat</h3>
            <p className="mt-2 text-gray-600">© 2025 WatchEat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
