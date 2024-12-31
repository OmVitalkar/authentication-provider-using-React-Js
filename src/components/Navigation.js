import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

export const Navigation = () => {
  const { isSignedIn, signOut } = useUser();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            {isSignedIn && (
              <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">
                Dashboard
              </Link>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {!isSignedIn ? (
              <>
                <Link to="/sign-in" className="text-gray-700 hover:text-gray-900">
                  Sign In
                </Link>
                <Link to="/sign-up" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={() => signOut()}
                className="text-red-500 hover:text-red-600"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};