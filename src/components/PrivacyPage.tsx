import { useEffect } from 'react';
import Navbar from './Navbar';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="pt-24" />

      {/* Privacy Notice Content */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Notice</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
              <p className="text-lg">
                At WatchEat, we take your privacy seriously. Your health data is personal and sensitive, 
                and we are committed to protecting it with the highest standards of security and privacy.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Collection</h2>
                  <p>
                    We only collect the information necessary to provide you with accurate calorie tracking 
                    and nutritional insights. This includes meal logs, activity data, and basic profile information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h2>
                  <p>
                    All your data is encrypted both in transit and at rest. We use industry-standard 
                    security measures to protect your information from unauthorized access.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Usage</h2>
                  <p>
                    Your personal data is never shared with third parties for marketing purposes. 
                    We use your data solely to improve your experience and provide personalized health insights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Control</h2>
                  <p>
                    You have full control over your data. You can view, export, or delete your 
                    information at any time through the app settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Notice or our data practices, 
                    please contact us at WatchEat2025@gmail.com.
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