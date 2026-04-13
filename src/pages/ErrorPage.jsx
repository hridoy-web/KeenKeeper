import { Link } from "react-router";
import { FaExclamationTriangle, FaHome, FaArrowLeft } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      {/* Icon */}
      <div className="text-6xl text-red-500 mb-4">
        <FaExclamationTriangle />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold">404</h1>

      {/* Message */}
      <h2 className="text-xl font-semibold mt-2">Page not found</h2>
      <p className="text-gray-500 mt-1 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <Link
          to="/"
          className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          <FaHome /> Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Footer */}
      <p className="absolute bottom-4 text-sm text-gray-400">
        KeenKeeper © {new Date().getFullYear()}
      </p>
    </div>
  );
}
