import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="min-h-screen bg-gray-100">
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a public page that anyone can access. Feel free to explore!
      </p>
      <div className="space-x-4">
        <Link
          to="/dashboard"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  </div>
);
