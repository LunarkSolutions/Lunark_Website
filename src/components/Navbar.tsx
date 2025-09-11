import { Link } from 'react-router-dom';
import WatchEatLogo from './WatchEatLogo';

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center">
      <nav
        className="w-[min(1200px,95%)] rounded-full border border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-lg px-4 sm:px-6 py-3 text-sm"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <WatchEatLogo className="h-8 w-8" />
            <span className="font-semibold text-gray-900">WatchEat</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Get In Touch</a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700 transition-colors"
          >
            Contact us
          </a>
        </div>
      </nav>
    </div>
  );
}


