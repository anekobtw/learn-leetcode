import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold mb-4 leetcode-gradient">
        404
      </h1>

      <h2 className="text-3xl font-semibold text-gray-500 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:scale-105 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound
