import { Activity, Target, TrendingUp, Calendar, Apple, BarChart3 } from 'lucide-react';
import Navbar from './Navbar';

export default function WatchEatPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="pt-24" />

      {/* Hero Section */}
      <section className="relative py-32 pb-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-500 text-white mx-auto mb-8">
              <Activity className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              WatchEat
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Take control of your health. This app tracks automatically the calories (and protein) you consume and burn, giving you a clear, daily view of your net calorie balance. Stay on track and achieve your goals.
            </p>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless and intuitive, feels just like a natural conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to maintain a healthy lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Food Tracking</h3>
              <p className="text-gray-600">
                Log everything you eat throughout the day with our easy-to-use interface. 
                Build healthy eating habits one meal at a time.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calorie Monitoring</h3>
              <p className="text-gray-600">
                Track your calorie intake and expenditure. See exactly how many calories 
                you've gained or lost throughout the day.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your progress over time with detailed charts and insights. 
                See your calorie trends and eating patterns.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Meal Planning</h3>
              <p className="text-gray-600">
                Plan your meals in advance and stay consistent with your dietary goals. 
                Never miss a meal or exceed your calorie targets.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white mb-4">
                <Apple className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Food Database</h3>
              <p className="text-gray-600">
                Access a comprehensive database of foods with accurate nutritional information. 
                Find any food item quickly and easily.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Analytics</h3>
              <p className="text-gray-600">
                Get detailed insights into your eating habits with comprehensive analytics 
                and personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-100/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How WatchEat Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple steps to start tracking your nutrition
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Log Your Meals</h3>
              <p className="text-gray-600">
                Simply talk about what you eat, and our app will listen and automatically log your meals. It's as easy as having a natural conversation.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Calories</h3>
              <p className="text-gray-600">
                WatchEat automatically calculates your calorie and protein intake and shows you the calories you've consumed and the calories you've burned in real-time, every moment of the day.
              </p>
            </div>

            <div className="text-center">
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
      <section className="relative py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-100/50 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Us for a real time reflection of your calorie balance
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already tracking their meals right from their wrist 
            and achieving their health goals with WatchEat.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Download for Apple Watch
            </button>
            <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Download for Wear OS
            </button>
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