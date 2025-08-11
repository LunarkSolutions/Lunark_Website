import React from 'react';
import { ArrowLeft, Activity, Target, TrendingUp, Calendar, Apple, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WatchEatPage() {
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
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white mx-auto mb-8">
              <Activity className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              WatchEat
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Track your daily meals and monitor your calorie intake right from your wrist. 
              Stay on top of your health goals with our intuitive watch app designed for seamless food tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to maintain a healthy lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Food Tracking</h3>
              <p className="text-gray-600">
                Log everything you eat throughout the day with our easy-to-use interface. 
                Build healthy eating habits one meal at a time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calorie Monitoring</h3>
              <p className="text-gray-600">
                Track your calorie intake and expenditure. See exactly how many calories 
                you've gained or lost throughout the day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your progress over time with detailed charts and insights. 
                See your calorie trends and eating patterns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Meal Planning</h3>
              <p className="text-gray-600">
                Plan your meals in advance and stay consistent with your dietary goals. 
                Never miss a meal or exceed your calorie targets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white mb-4">
                <Apple className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Food Database</h3>
              <p className="text-gray-600">
                Access a comprehensive database of foods with accurate nutritional information. 
                Find any food item quickly and easily.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How WatchEat Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple steps to start tracking your nutrition
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Log Your Meals</h3>
              <p className="text-gray-600">
                Simply input what you eat throughout the day. Search our extensive food database 
                or scan barcodes for quick entry.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Calories</h3>
              <p className="text-gray-600">
                Watch as WatchEat automatically calculates your calorie intake and shows 
                you how many calories you've gained or burned.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitor Progress</h3>
              <p className="text-gray-600">
                Review your daily, weekly, and monthly progress. Get insights and 
                recommendations to help you reach your health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already tracking their meals right from their wrist 
            and achieving their health goals with WatchEat.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Download for Apple Watch
            </button>
            <button className="w-full sm:w-auto bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors">
              Download for Wear OS
            </button>
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