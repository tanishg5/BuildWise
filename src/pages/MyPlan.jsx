import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

function MyPlan() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading plans from an API
  useEffect(() => {
    const timer = setTimeout(() => {
      // Replace this with actual API call
      // const fetchedPlans = await fetchPlans();
      // setPlans(fetchedPlans);
      setPlans([]); // Currently empty for demo
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:text-5xl">
            My Workout Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your custom workout routines and track your fitness journey
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mb-10">
          <button 
            onClick={() => navigate('/createplan')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-150 transform hover:-translate-y-0.5"
          >
            <FiPlus className="mr-2 h-5 w-5" />
            Create New Plan
          </button>
        </div>

        {/* Plans Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : plans.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {plan.days.length} days
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                  <button
                    onClick={() => navigate(`/plan/${plan.id}`)}
                    className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500"
                  >
                    View details <FiArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-12 text-center">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">No workout plans</h3>
              <p className="mt-2 text-gray-500 max-w-md mx-auto">
                Get started by creating your first custom workout plan tailored to your fitness goals.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => navigate('/createplan')}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <FiPlus className="mr-2 h-5 w-5" />
                  Create New Plan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPlan;