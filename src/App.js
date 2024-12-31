import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

const CLERK_PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark
      }}
    >
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />
            <Route
              path="/sign-in/*"
              element={<SignIn routing="path" path="/sign-in" />} />
            <Route
              path="/sign-up/*"
              element={<SignUp routing="path" path="/sign-up" />} />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;