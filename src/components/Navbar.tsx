import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center">
      <nav
        className="w-[min(1200px,95%)] rounded-full border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 shadow-lg px-4 sm:px-6 py-3 text-sm"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-purple-400 to-fuchsia-500 shadow" />
            <span className="font-semibold text-white">Lunark</span>
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 font-medium text-gray-900 hover:bg-gray-100"
          >
            Contact us
          </Link>
        </div>
      </nav>
    </div>
  );
}


