import React from 'react';
import { useUser } from '@clerk/clerk-react';

export const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={user?.imageUrl}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-semibold">
                Welcome, {user?.firstName}!
              </h2>
              <p className="text-gray-600">{user?.emailAddresses[0].emailAddress}</p>
            </div>
          </div>
          <div className="prose">
            <p className="text-gray-700">
              This is a protected page that can only be accessed by authenticated users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};